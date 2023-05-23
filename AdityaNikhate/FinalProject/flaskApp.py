from flask import Flask, request, jsonify, redirect, render_template
from flask_mysqldb import MySQL
import json
import base64
from connect1 import getConnection
import pymysql
from crudOperation import insertData, checkPassword,savedataSells,retrieve
from decimal import Decimal

# class DecimalEncoder(json.JSONEncoder):
#     def default(self, obj):
#         if isinstance(obj, Decimal):
#             return float(obj)
#         return super().default(obj)

app= Flask(__name__)

# MySQL configurations
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'Aditya@mysql1'
app.config['MYSQL_DB'] = 'ecommerce'
mysql = MySQL(app)


@app.route('/')
def index():
    return render_template('signup.html')

@app.route('/shoppage')
def shoppage():
    return render_template('shop.html')

# open_Login
@app.route('/signup', methods=["POST"])
def signup():
    return render_template('signup.html')

@app.route('/login')
def login():
    return render_template('login.html')

# sellform2 render from here
@app.route('/sellform2')
def sellform2():
    return render_template('sellform2.html')

@app.route("/send_data", methods=['POST'])
def send_data():
    data = request.get_json()
    print(data)
    insertData(data)
    return jsonify({"status":"ok"})


# this flask App is to check the login information
@app.route("/checkLoginInfo", methods=['POST'])
def checkLoginInfo():
    data=request.get_json()
    print(data)
    flag = checkPassword(data)
    print("gfhfg")
    print(flag)
    # return jsonify({"status":"ok"})

    return jsonify(flag = flag)
    # return flag

#to load main page (Home page) 
@app.route('/loadmainPage')
def loadmainPage():
    return render_template('mainpage.html')

@app.route('/loadsellingForm')
def loadsellingForm():
    return render_template('sellingForm.html')



# to send image to data base
@app.route('/saveselldata', methods=['POST'])
def upload():
  # Get the image and text input values from the form data
  image = request.files['productimage']
  text1 = request.form['productName']
  text2 = request.form['productPrice']

  # Convert the image to base64 format
  encoded_image = base64.b64encode(image.read()).decode('utf-8')

  # Save the data to MySQL
  conn = getConnection()
  cursor = conn.cursor()
  sql = "INSERT INTO selldata (productimage, productname,productprice) VALUES (%s, %s, %s)"
  cursor.execute(sql, (encoded_image, text1, text2))
  conn.commit()
  # Return a success message
  return jsonify({'message': 'Data has been saved successfully!'})


# Send data to json from selldata table
@app.route('/senddata', methods=['POST'])
def senddata():
    # req = request.get_json()
    data = retrieve()
    req = jsonify(data)
    return req


#new code for saving image in database for html file sellform3.html
@app.route('/sellform2submition', methods=['GET', 'POST'])
def upload_image():
    if request.method == 'POST':
        # Retrieve image, title, and price from the HTML form
        image = request.files['productImage']
        name = request.form['productName']
        price = request.form['productPrice']

        # Save image to a directory (you can change the directory as needed)
        image.save('static/images/' + image.filename)

        # Save image details to the MySQL database
        cur = mysql.connection.cursor()
        with open('static/images/' + image.filename, 'rb') as f:
            image_data = f.read()
        cur.execute("INSERT INTO newsellstorage (productname, productprice, productimage) VALUES (%s, %s, %s)",
                    (name, price, image_data))
        mysql.connection.commit()
        cur.close()

    return render_template('mainpage.html') 


# This is code for showing images form database to html
@app.route('/shop2')
def display_images():
    # Retrieve all rows from the MySQL table
    cur = mysql.connection.cursor()
    cur.execute("SELECT productname, productprice, productimage FROM newsellstorage")
    data = cur.fetchall()
    cur.close()

    # Convert data to JSON format
    images = []
    for row in data:
        # print(row[0])
        image = {
            'name': row[0],
            'price': float(row[1]),
            'image': base64.b64encode(row[2]).decode('utf-8')
        }
        images.append(image)

    return render_template('Shop2.html', images=json.dumps(images))



if __name__ == '__main__':
    app.run(debug=True, port=7000)