const carrito = document.getElementById("carritoOculto");

const carritoF = document.querySelector(".carritoFlotante");

function mostrarCarrito () {
   carrito.style.display = 'grid'
}

function ocultarCarrito () {
    carrito.style.display = "none"
}

function mostrarCarritoFlotante () {
    // carritoF.style.display = "grid"
    carritoF.className = "carritoFlotante pfija grid cartProp animCart"
}

function ocultarCarritoFlotante () {
    carritoF.className = "carritoFlotante pfija grid cartProp animCart2";
    // carritoF.style.display = "none";
}