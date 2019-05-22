#!/usr/bin/env python3

import json
from flask import jsonify, Flask
from flask_cors import CORS, cross_origin

data = {}
with open("./data.json") as f:
        data = json.load(f)

app = Flask(__name__)
cors = CORS(app)

@app.route("/", methods=["GET"])
@cross_origin()
def api_doc():
        return jsonify(data)

@app.route("/doc/<int:doc_id>", methods=["GET"])
@cross_origin()
def get_doc(doc_id):
        comment_list = data.get("data")
        comments = [comment['text'] for comment in comment_list if comment['from_doc'] == doc_id]

        print(comments)
        return jsonify(comments)

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
