from connect1 import getConnection
from flask import Flask, request
import base64

def insertData(data):
    print(data)
    conn = getConnection()
    cursor = conn.cursor()
    sql = "Insert into logininfo(email, password) values (%s,%s)"
    cursor.execute(sql,(data['email'], data['password']))
    conn.commit()
    cursor.close()
    conn.close()

# function to check the login information
def checkPassword(data):
    # print("this is function"+data['email']+data['password'])
    email1= data['email']
    password1 = data['password']
    
    conn = getConnection()
    cursor = conn.cursor()

    query1 = "SELECT COUNT(*) FROM logininfo WHERE email = %s"
    cursor.execute(query1, (email1,))
    # Retrieve the result
    result = cursor.fetchone()[0]

# # Close the cursor and connection
# cursor.close()
# cnx.close()
    flag=0
# Check if the ID is present in the table
    if result > 0:
        sql="SELECT password FROM logininfo WHERE email=%s"
        cursor.execute(sql, (email1,))
        result = cursor.fetchone()
        print(result)
        cursor.close()
        conn.close()
        if result[0]== password1:
            return 1
        else:
            return 0
    else:
        cursor.close()
        conn.close()
        return 0
       

# save data in database comming from sells form 
# It contain ProductName, ProductPrice, ProductImage
def savedataSells(data):
    conn = getConnection()
    cursor = conn.cursor()
    productname = data['productname']
    productprice = data['productprice']
    
    # Extract base64 encoded image data and decode it
    image_data = data['productimage']
    image_data = image_data.split(",")[1]  # remove the data:image/png;base64, header
    image = base64.b64decode(image_data)
    # insert the data into the appropriate tables
    try:
        # Insert data into MySQL database
        with connection.cursor() as cursor:
            sql = "INSERT INTO mytable (text_input1, text_input2, image) VALUES (%s, %s, %s)"
            cursor.execute(sql, (productname, productprice, image))
        conn.commit()

    finally:
        # Close database connection
        conn.close()
    return jsonify({'status': 'success'})



# to retrive the images of products 
# Also the data to be retrieve
def retrieve():
    # Fetch the data from MySQL
    conn = getConnection()
    cursor = conn.cursor()
    sql = "SELECT productimage,productname, productprice FROM selldata"
    cursor.execute(sql)
    data = cursor.fetchall()

    # Process the retrieved data
    result = []
    for row in data:
        encoded_image = row[0]
        name = row[1]
        price = row[2]
        # decoded_image = base64.b64decode(encoded_image).decode('utf-8')
        result.append({'image': encoded_image, 'name': name, 'price':price})
    print(result)
    # Return the retrieved data as JSON
    return result
