import mysql.connector

def obtener_conexion():
    conexion = mysql.connector.connect(
        host="localhost",      # servidor de MySQL
        user="root",           # usuario de MySQL
        password="1234",       # contraseña de MySQL
        database="tienda_flask" # nombre de la base de datos
    )
    return conexion