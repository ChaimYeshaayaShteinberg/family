from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

family = []

@app.route('/')
def home():
    return jsonify(family)

@app.route('/add_family_member', methods=['POST'])
def add_family_member():
    data = request.get_json()
    family.append(data)
    return jsonify(family)

if __name__ == '__main__':
    app.route(debug=True)