// Alerta personalizada
function mostrarAlerta() {
    alert("👋 Bienvenido Marcelo, esta alerta fue creada con JavaScript");
}

// Validación del formulario
document.getElementById("contactoForm").addEventListener("submit", function (evento) {
    evento.preventDefault();

    const nombre = document.getElementById("nombre");
    const correo = document.getElementById("correo");
    const mensaje = document.getElementById("mensaje");

    let valido = true;

    limpiarErrores();

    if (nombre.value.trim() === "") {
        mostrarError("errorNombre", "El nombre es obligatorio");
        valido = false;
    }

    if (correo.value.trim() === "") {
        mostrarError("errorCorreo", "El correo es obligatorio");
        valido = false;
    }

    if (mensaje.value.trim() === "") {
        mostrarError("errorMensaje", "El mensaje es obligatorio");
        valido = false;
    }

    if (valido) {
        alert("✅ Formulario enviado correctamente");
        evento.target.reset();
    }
});

function mostrarError(id, mensaje) {
    document.getElementById(id).textContent = mensaje;
}

function limpiarErrores() {
    document.getElementById("errorNombre").textContent = "";
    document.getElementById("errorCorreo").textContent = "";
    document.getElementById("errorMensaje").textContent = "";
}
