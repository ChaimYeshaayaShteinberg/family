from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

family = []

@app.route('/')
def home():
    return jsonify(family)