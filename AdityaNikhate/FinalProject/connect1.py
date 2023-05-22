import mysql.connector as connection
def getConnection():
    conn = connection.connect(user='root',password='Aditya@mysql1', host='localhost', database='ecommerce')
    return conn