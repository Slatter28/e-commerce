import productos from '../database/index.js'

/* Buscar el elemento en el DOM */
const productosContenedor = document.getElementById('productosContenedor')

/* Pintamos los productos en el DOM */
function pintarProductos() {
  /* Creamos una variable para almacenar después los productos */
  let html = ''
  /* Recorremos el array de productos */
  for (const { id, nombre, imagen, precio, cantidad, descripcion } of productos) {
   
    html += `
    <div class="container_card">
      <div class="card">
        <div class="imgBx">
          <img src="${imagen}">
        </div>
        <div class="contentBx">
          <h2>${nombre}  - $${precio} </h2>
          <div class="size">
            <h3>Descripción:</h3>
            <p>${descripcion}</p>
            <h3>Cantidad : ${cantidad}</h3>
          </div>
          <button class="agregar button-49" role="button" type="button" data-id="${id}">Agregar <i class='bx bx-cart-add'></i></button>
        </div>
      </div>
    </div>`
  }
  productosContenedor.innerHTML = html
}

export default pintarProductos
