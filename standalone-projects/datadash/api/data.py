"""API Python - données style Power AMC pour DataDash"""
from http.server import BaseHTTPRequestHandler
import json

SALES_DATA = [
    {"month": "Jan", "value": 4000},
    {"month": "Fév", "value": 3000},
    {"month": "Mar", "value": 5000},
    {"month": "Avr", "value": 4500},
    {"month": "Mai", "value": 6000},
    {"month": "Jun", "value": 5500},
]

USER_DATA = [
    {"name": "Utilisateurs", "value": 1200},
    {"name": "Actifs", "value": 890},
    {"name": "Nouveaux", "value": 310},
]

class handler(BaseHTTPRequestHandler):
    def do_GET(self):
        data = {"sales": SALES_DATA, "users": USER_DATA}
        body = json.dumps(data).encode("utf-8")
        self.send_response(200)
        self.send_header("Content-Type", "application/json")
        self.send_header("Access-Control-Allow-Origin", "*")
        self.end_headers()
        self.wfile.write(body)
