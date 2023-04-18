var carrito = [];
var seHaAgregadoBotonPago = false;
var total = 0;

function agregarAlCarrito(elemento) {
  var titulo = elemento.getAttribute("titulo-item");
  var precio = parseInt(elemento.getAttribute("precio-item"));

  carrito.push({ titulo: titulo, precio: precio });

  actualizarCarrito();
  actualizarTotal();
}

function eliminarDelCarrito(elemento) {
  var indice = elemento.getAttribute("indice-item");
  carrito.splice(indice, 1);
  actualizarCarrito();
  actualizarTotal();
}

function actualizarCarrito() {
  var carritoDOM = document.querySelector("#carrito ul");
  carritoDOM.innerHTML = "";

  carrito.forEach(function (item, indice) {
    var li = document.createElement("li");
    li.textContent = item.titulo + " - $" + item.precio;
    
    var eliminarBtn = document.createElement("button");
    eliminarBtn.textContent = "Eliminar";
    eliminarBtn.setAttribute("indice-item", indice);
    eliminarBtn.addEventListener("click", function() {
      eliminarDelCarrito(this);
    });
    
    li.appendChild(eliminarBtn);
    carritoDOM.appendChild(li);
  });
}


function actualizarTotal() {
  total = 0;

  carrito.forEach(function (item) {
    total += item.precio;
  });

  var totalDOM = document.querySelector("#total");
  totalDOM.textContent = total;

  if (!seHaAgregadoBotonPago) {
    var pagarBtn = document.createElement("button");
    pagarBtn.textContent = "Pagar";
    pagarBtn.addEventListener("click", function() {
      alert("Uno de nuestros asesores se contactará en breve para la cita");
      carrito = [];
      actualizarCarrito();
      actualizarTotal();
      seHaAgregadoBotonPago = false;
      var botonPagoContenedor = document.querySelector("#boton-pago-contenedor");
      botonPagoContenedor.parentNode.removeChild(botonPagoContenedor);
    });

    var botonPagoContenedor = document.createElement("div");
    botonPagoContenedor.setAttribute("id", "boton-pago-contenedor");
    botonPagoContenedor.appendChild(pagarBtn);

    var carritoDOM = document.querySelector("#carrito");
    carritoDOM.parentNode.appendChild(botonPagoContenedor);

    seHaAgregadoBotonPago = true;
  }
}