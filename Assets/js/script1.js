const carrito = document.getElementById("carritoOculto");

const carritoF = document.querySelector(".carritoFlotante")

function mostrarCarrito () {
   carrito.style.display = 'grid'
}

function ocultarCarrito () {
    carrito.style.display = "none"
}

function mostrarCarritoFlotante () {
    carritoF.style.display = "flex"
}

function ocultarCarritoFlotante () {
    carritoF.style.display = "none"
}