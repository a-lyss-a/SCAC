import flask
import requests
import json
import os
from sre_parse import State
from flask_cors import CORS, cross_origin


response = requests.get("http://unesco-api.herokuapp.com/sites").json()

app = flask.Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

def country_sites(country):
    sites = []
    for r in response:
        for ic in r.get("iso_codes"):
            if ic.get("alpha_2_code") == country:
                sites.append(r.get("name"))
    return sites

def gallery(country):
    results = []
    gallery_keys = ("name", "image_url", "category", "id")
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

@app.route("/hack/gallery")
def gallery_query():
    results = json.dumps(gallery(flask.request.args.get("query").lower()))
    return results

@app.route("/hack/details")
def details_query():
    results = json.dumps(details(int(flask.request.args.get("query"))))
    return results

if __name__ == '__main__':
    app.run(host="0.0.0.0", port=os.getenv('PORT'))