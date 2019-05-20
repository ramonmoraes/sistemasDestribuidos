
from flask import jsonify, Flask
import json

data = {}
with open("./data.json") as f:
        data = json.load(f)
app = Flask(__name__)

@app.route("/", methods=["GET"])
def api_doc():
        return jsonify(data)

@app.route("/doc/<int:doc_id>", methods=["GET"])
def get_doc(doc_id):
        comment_list = data.get("data")
        comments = [comment['text'] for comment in comment_list if comment['from_doc'] == doc_id]

        print(comments)
        return jsonify(comments)

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
