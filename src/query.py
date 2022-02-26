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

def get_Image_URL(name):
    for r in response:
        if r.get("name") == name:
            return r.get("image_url")

def gallery(country):
    results = {}
    for n in country_sites(country):
        results[n] = get_Image_URL(n)
    return results

def details(site):
    results = {}
    result_keys = ("name", "image_url", "short_description", "location", "region", "states", "date_inscribed")
    for r in response:
        if r.get("name") == site:
            for k in result_keys:
                results[k] = r.get(k)
            results["coordinates"] = (r.get("longitude"), r.get("latitude"))
    return results

# def query(country):
#     results = json.dumps(zip(country))
#     f = open("query-results.json2", "w")
#     f.write(results)
#     f.close

g = open("site-request.txt", "r")
site = g.read().strip()
g.close()
# site = country_sites(country)[1]

app = flask.Flask(__name__)

@app.route("/gallery")
def gallery_query():
    # results = zip(country)
    # html_string = ""
    # sites = list(results.keys())
    # pictures = list(results.values())
    # for i in range(len(results)):
    #     html_string += "<div><h3>{}</h3><img src='{}' alt='Image not found'></div>".format(sites[i],pictures[i])
    # return html_string
    results = json.dumps(gallery(flask.request.args.get("query")))
    # print(requests.args.get("query"))
    return results

@app.route("/details")
def details_query():
    results = json.dumps(details(flask.request.args.get("query")))
    # print(results)
    return results