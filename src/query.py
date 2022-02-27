import flask
#from flask import Flask
#from inspect import iscode
from sre_parse import State
import requests
import json

url = "http://unesco-api.herokuapp.com/sites"
response = requests.get(url).json()

def country_sites(country):
    sites = []
    for r in response:
        for ic in r.get("iso_codes"):
            if ic.get("alpha_2_code") == country:
                sites.append(r.get("name"))
    return sites

def gallery(country):
    results = []
    gallery_keys = ("name", "image_url", "category")
    for n in country_sites(country):
        item = {}
        for r in response:
            if r.get("name") == n:
                for k in gallery_keys:
                    item[k] = r.get(k)
                results.append(item)
    return results

def details(site_id):
    results = {}
    result_keys = ("name", "image_url", "short_description", "location", "date_inscribed")
    for r in response:
        if r.get("id") == site_id:
            for k in result_keys:
                results[k] = r.get(k)
            results["coordinates"] = "(" + str(r.get("longitude")) +', '+ str(r.get("latitude")) + ")"
            results["region"] = r.get("region").get("name")
            results["states"] = (", ").join([i.get("name") for i in r.get("states")])
            if(r.get("danger") != None):
                results["danger"] = "Yes! It is in DANGER!"
            else:
                results["danger"] = "No! It is not in DANGER!"
    return results

# def query(country):
#     results = json.dumps(zip(country))
#     f = open("query-results.json2", "w")
#     f.write(results)
#     f.close

#country = "cn"

app = flask.Flask(__name__)

@app.route("/gallery")
def gallery_query():
    # results = gallery(country)
    # html_string = ""
    # sites = list(results.keys())
    # pictures = list(results.values())
    # for i in range(len(results)):
    #     html_string += "<div><h3>{}</h3><img src='{}' alt='Image not found'></div>".format(sites[i],pictures[i])
    # return html_string
    results = json.dumps(gallery(flask.request.args.get("query")))
    return results

@app.route("/details")
def details_query():
    results = json.dumps(details(int(flask.request.args.get("query"))))
    return results