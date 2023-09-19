let productos = [
    {
    id : 1,
    nombre : "Cabello",
    productoDescripcion : "Con tijera o maquina",
    precio : 10,
    imagen : "../img/cabello.jpg",
    cantidad : 0

},
{
    id : 2,
    nombre : "Barba",
    productoDescripcion :"corte y diseño profesional de barba",
    precio : 8,
    imagen : "../img/barba.jpg",
    cantidad : 0

},
{
    id : 3,
    nombre :"Cabello+Barba",
    productoDescripcion : "Paquete completo de cabello y barba",
    precio : 15,
    imagen : "../img/cabello+barba.jpg",
    cantidad : 0

}
]

let carrito = []

let listaProductos = document.getElementById("listaProductos")


for (let i = 0; i < productos.length; i++) {
    let producto = productos[i];
    
    let cardTarjetas = document.createElement("div") 
    cardTarjetas.innerHTML = `
    <div class="card" style="width: 18rem;">
                    <h1>${producto.nombre}</h1>
                    <img src="${producto.imagen}" class="card-img-top" alt="hamburguesas">
                    <div class="card-body">
                        <h5 class="card-title">${producto.productoDescripcion}</h5>
                        <p class="card-text">Precio: $${producto.precio.toFixed(2)}</p>
                        <input type="number" class="form-control mb-2" placeholder="Cantidad" value="0" data-producto-id="${producto.id}"> 
                        <button class="btn btn-agregar-carrito" data-producto-id="${producto.id}">Agregar al carrito</button>
                    </div>
                </div>
    `
    listaProductos.appendChild(cardTarjetas)
    cardTarjetas.className = "card"
}

const cantidadInputs = document.querySelectorAll('input[type="number"]');
for (let i = 0; i < cantidadInputs.length; i++) {
    let input = cantidadInputs[i];
    input.addEventListener("input", actualizarCantidad)
}
const agregarButtons = document.getElementsByClassName("btn-agregar-carrito");
for (let i = 0; i < agregarButtons.length; i++) {
    let button = agregarButtons[i];
    button.addEventListener("click", agregarAlCarrito)
}


function actualizarCantidad (event) {
    let input = event.target
    let productoId = input.getAttribute("data-producto-id")
    let cantidad = parseInt(input.value)

    let producto = productos.find((producto) => producto.id == parseInt(productoId))
    producto.cantidad = cantidad
}

function agregarAlCarrito (event) {
    let button = event.target
    let productoId = button.getAttribute("data-producto-id")
    let producto = productos.find((producto) => producto.id == parseInt(productoId));

    let productoEnCarrito = carrito.find((item) => item.id == producto.id)

    if(productoEnCarrito){
        productoEnCarrito.cantidad += 1
    }else{
        carrito.push({...productos, cantidad: 1 })
    }

    
  console.log("Producto agregado al carrito. ID: " + productoId);
  console.log("Carrito:", carrito);
}