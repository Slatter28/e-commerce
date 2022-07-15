import pintarProductos from './components/productos.js'
import { pintarArticulos, agregarArticulo, removerArticulo, removerTodo, vaciarCarrito, comprar, articulos } from './components/carrito.js'

const productosContenedor = document.getElementById('productosContenedor')
const articulosContenedor = document.getElementById('cartF')

const btnsAcciones = document.getElementById('btnsAcciones')

document.addEventListener('DOMContentLoaded', () => {
  /* Pintar los productos */
  pintarProductos()

  /* Pintar los articulos */
  pintarArticulos()

  productosContenedor.addEventListener('click', (e) => {
    const target = e.target
    console.log(target)
    if (target.classList.contains('agregar')) {
      const id = target.dataset.id
      console.log(id)
      agregarArticulo(+id, 1)
    }

    pintarArticulos()
  })

  articulosContenedor.addEventListener('click', (e) => {
    const target = e.target
    if (target.classList.contains('agregar')) {
      const id = target.dataset.id
      agregarArticulo(+id, 1)
    }

    if (target.classList.contains('remover')) {
      const id = target.dataset.id
      removerArticulo(+id, 1)
    }

    if (target.classList.contains('removerTodo')) {
      const id = target.dataset.id
      removerTodo(+id)
    }

    pintarArticulos()
  })

  btnsAcciones.addEventListener('click', (e) => {
    const target = e.target
    if (target.classList.contains('limpiar')) {
      vaciarCarrito()
    }

    if (target.classList.contains('comprar')) {
      if (articulos.length > 0) {
        comprar()
        pintarProductos()
      } else {
        window.alert('No hay artículos en el carrito, agregue unos cuantos')
      }
    }

    pintarArticulos()
  })
})

// <=================== LOGICA FORMULARIO ======================>

form.addEventListener('submit', (e) => {
  e.preventDefault()

  const email = 'tecno.gcinco@gmail.com'
  // alert ('Enviado')
  const URL_BASE = `https://formsubmit.co/ajax/${email}`

  const input = e.currentTarget.elements
  const formData = {
    name: input.name.value,
    email: input.email.value,
    message: input.message.value
  }

  fetch(URL_BASE, {
    method: "POST",
    headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    body: JSON.stringify(formData)
})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));

  console.log(formData)
  e.currentTarget.reset()
})
