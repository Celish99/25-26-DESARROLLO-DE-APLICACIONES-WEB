from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def inicio():
    return render_template('index.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/productos')
def productos():
    conn = get_db_connection()
    productos_db = conn.execute(
        'SELECT * FROM productos ORDER BY nombre ASC'
    ).fetchall()
    conn.close()

    inventario = Inventario()

    for p in productos_db:
        producto_obj = Producto(
            p['id'],
            p['nombre'],
            p['cantidad'],
            p['precio']
        )
        inventario.agregar_producto(producto_obj)

    productos = inventario.mostrar_todos()

    return render_template('productos.html', productos=productos)

@app.route('/clientes')
def clientes():
    lista_clientes = ["Juan Pérez", "Ana Gómez", "Carlos Torres"]
    return render_template('clientes.html', clientes=lista_clientes)

@app.route('/factura')
def factura():
    return render_template('factura.html')

if __name__ == '__main__':
    app.run(debug=True)