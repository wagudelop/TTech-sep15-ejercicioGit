// js/consultas.js

// ----------------------------------------------------
// Funciones de consulta de productos y servicios
// ----------------------------------------------------

// Devuelve todos los cursos o los filtra por categoría
function obtenerProductosServicios(categoria = "") {
    if (!categoria) {
        return lista_cursos;
    }
    return lista_cursos.filter(curso => curso.codigo_categoria === categoria);
}

// Devuelve un curso/servicio por su código
function obtenerProductoServicioPorCodigo(codigo) {
    return lista_cursos.find(curso => String(curso.codigo) === String(codigo));
}

// Compatibilidad con otros scripts
window.obtenerProductoServicio = obtenerProductoServicioPorCodigo;

// ----------------------------------------------------
// Funciones del carrito
// ----------------------------------------------------

// Calcula el total de forma precisa
function calcularTotalCarrito() {
    const total = carrito.reduce((suma, item) => suma + item.precio, 0);
    return Number(total.toFixed(2)); // devuelve número seguro con dos decimales
}

// Mostrar carrito en el DOM
function mostrarCarrito() {
    const etiqueta_carrito = document.getElementById("etiqueta_carrito");
    const etiqueta_total = document.getElementById("etiqueta_total");

    if (!etiqueta_carrito) return; // seguridad

    etiqueta_carrito.innerHTML = "";

    carrito = obtenerCarrito();

    // Agrupar productos por código
    const productosAgrupados = carrito.reduce((acumulador, item) => {
        const key = item.codigo;
        if (!acumulador[key]) {
            acumulador[key] = { ...item, cantidad: 0 };
        }
        acumulador[key].cantidad++;
        return acumulador;
    }, {});

    // Generar elementos en el carrito
    Object.values(productosAgrupados).forEach((elemento) => {
        const li = document.createElement("li");
        li.classList.add(
            "list-group-item",
            "d-flex",
            "justify-content-between",
            "align-items-start",
            "p-2"
        );

        li.innerHTML = `
            <div class="row w-100 align-items-center">
                <div class="col-8">
                    <h6 class="my-0">${elemento.nombre}</h6>
                    <small>Precio: $${elemento.precio} x ${elemento.cantidad}</small>
                </div>
                <div class="col-4 d-flex justify-content-end">
                    <a class="btn btn-danger text-white p-2" href="#"
                       onclick="eliminarProductoServicioPorCodigo('${elemento.codigo}')"
                       title="Eliminar todos los ${elemento.nombre}">
                        <i class="fas fa-times"></i>
                    </a>
                </div>
            </div>`;
        etiqueta_carrito.appendChild(li);
    });

    // Mostrar el total en pantalla
    if (etiqueta_total) {
        etiqueta_total.innerText = calcularTotalCarrito().toLocaleString("es-CO");
    }
}

// Agregar un producto al carrito
function agregarProductoServicio(producto) {
    carrito.push(producto);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    mostrarCarrito();
}

// Eliminar todos los productos con un código específico
function eliminarProductoServicioPorCodigo(codigo) {
    carrito = carrito.filter(item => item.codigo !== codigo);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    mostrarCarrito();
}

// Vaciar todo el carrito
function vaciarCarrito() {
    carrito = [];
    localStorage.setItem("carrito", JSON.stringify(carrito));
    mostrarCarrito();
}

// Finalizar compra
function finalizarCompra() {
    if (carrito.length === 0) {
        alert("Tu carrito está vacío.");
        return;
    }

    // Guardar el total en localStorage en lugar de pasarlo por URL (más seguro)
    const total = calcularTotalCarrito();
    localStorage.setItem("totalCompra", total);

    // Redirige a pago.html
    window.location.href = "pago.html";
}

// ----------------------------------------------------
// Utilidades
// ----------------------------------------------------

// Obtener carrito desde localStorage
function obtenerCarrito() {
    try {
        const str = localStorage.getItem("carrito");
        return str ? JSON.parse(str) : [];
    } catch (e) {
        console.warn("Error al leer carrito de localStorage:", e);
        return [];
    }
}
