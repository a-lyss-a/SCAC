from inspect import iscode
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

def zip(country):
    results = {}
    for n in country_sites(country):
        results[n] = get_Image_URL(n)
    return results

def query(country):
    results = json.dumps(zip(country))
    f = open("query-results.json2", "w")
    f.write(results)
    f.close

f = open("query-request.txt", "r")
country = f.read().strip()
query(country)
