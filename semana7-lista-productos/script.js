const productos = [
    {
        nombre: "Laptop",
        precio: 800,
        descripcion: "Laptop para estudio y trabajo"
    },
    {
        nombre: "Mouse",
        precio: 20,
        descripcion: "Mouse inalámbrico"
    }
];

const lista = document.getElementById("listaProductos");
const btnAgregar = document.getElementById("btnAgregar");

const inputNombre = document.getElementById("nombre");
const inputPrecio = document.getElementById("precio");
const inputDescripcion = document.getElementById("descripcion");

// Renderizar productos
function renderizarProductos() {
    lista.innerHTML = "";

    productos.forEach(producto => {
        const li = document.createElement("li");

        li.innerHTML = `
            <strong>${producto.nombre}</strong><br>
            💲 Precio: $${producto.precio}<br>
            📝 ${producto.descripcion}
        `;

        lista.appendChild(li);
    });
}

// Agregar producto
btnAgregar.addEventListener("click", () => {
    const nombre = inputNombre.value.trim();
    const precio = inputPrecio.value.trim();
    const descripcion = inputDescripcion.value.trim();

    if (nombre === "" || precio === "" || descripcion === "") {
        alert("Por favor complete todos los campos");
        return;
    }

    const nuevoProducto = {
        nombre,
        precio,
        descripcion
    };

    productos.push(nuevoProducto);
    renderizarProductos();

    // Limpiar campos
    inputNombre.value = "";
    inputPrecio.value = "";
    inputDescripcion.value = "";
});

// Renderizado inicial
renderizarProductos();

