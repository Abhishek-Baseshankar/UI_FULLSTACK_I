from flask import Flask, request, jsonify
from flask_cors import CORS
from cri import getData 

app = Flask(__name__)


@app.route('/score', methods=['GET', 'POST'])
def home():
    if request.method == 'GET':
        data = getData()
        resp = jsonify(data)
        resp.headers.add('Access-Control-Allow-Origin', '*')
        print(data)
        return resp
    elif request.method == 'POST':
        # handle POST request
        data = request.get_json() # extract JSON data from request
        return 

@app.route('/hello', methods=['GET'])
def hello():
    
    resp = jsonify({
        "live Score":'Hello, World!'
    })
    resp.headers.add('Access-Control-Allow-Origin', '*')
   
    return resp

if __name__ == '__main__':
    app.run(debug=True,port=7000)
