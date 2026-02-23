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
    lista_productos = ["Laptop", "Mouse", "Teclado", "Monitor"]
    return render_template('productos.html', productos=lista_productos)

@app.route('/clientes')
def clientes():
    lista_clientes = ["Juan Pérez", "Ana Gómez", "Carlos Torres"]
    return render_template('clientes.html', clientes=lista_clientes)

@app.route('/factura')
def factura():
    return render_template('factura.html')

if __name__ == '__main__':
    app.run(debug=True)