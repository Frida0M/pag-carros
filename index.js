window.onload = function () {
  var imagen = document.querySelector(".slide-img");
  var boton1 = document.querySelector(".boton1");
  var boton2 = document.querySelector(".boton2");
  var contador = 0;
  boton1.style.display = "none";
  arreglo = ["/autos/logo_VW.png", "/autos/logo_NISSAN.png", "/autos/logo_KIA.jpeg"]
  boton1.addEventListener("click", function () {
    imagen.setAttribute("src", arreglo[contador - 1]);
    contador--;
    console.log(contador);
    console.log(arreglo[contador]);
    if (contador == 0) {
      boton1.style.display = "none";
      boton2.style.display = "block";
    }
    if (contador > 0 && contador < 2) {
      boton1.style.display = "block";
      boton2.style.display = "block";
    }
  });
  boton2.addEventListener("click", function () {
    imagen.setAttribute("src", arreglo[contador + 1]);
    contador++;
    console.log(contador);
    console.log(arreglo[contador]);
    if (contador == 2) {
      boton1.style.display = "block";
      boton2.style.display = "none";
    }
    if (contador > 0 && contador < 2) {
      boton1.style.display = "block";
      boton2.style.display = "block";
    }
  });
};

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
      alert("Pago realizado");
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










