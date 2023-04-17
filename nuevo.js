/* var imagen=document.querySelector(".slide-img");
      boton1=document.querySelector(".boton1");
      boton2=document.querySelector(".boton2");
      contador=0;
      arreglo=["./img/carro1.jpg","./img/carro2.jpg","./img/carro3.jpg"];
      boton2.style.display="none";

      boton1.addEventListener("click", function(){
        imagen.setAttribute("src",arreglo[contador]);
        contador++;
        if(contador>=3){
          boton2.style.display="block";
          boton1.style.display="none";
        }else if (contador!=3){
          boton2.style.display="block";
        }
        console.log(arreglo[contador]);
        console.log(contador);
      });


      boton2.addEventListener("click", function(){
        imagen.setAttribute("src",arreglo[contador]);
        contador--;
        if (contador<=0){
          boton2.style.display="none";
          boton1.style.display="block";
        }else if (contador!=0){
          boton1.style.display="block";
        }
        
        
        console.log(arreglo[contador]);
        console.log(contador);
      }); */

///////////////////
    
  /*    
var carritoCantidad = document.getElementById("carrito-cantidad");
var carroDeCompras = document.getElementById("carro-de-compras");

var nuevoImgs = document.querySelectorAll("#nuevo img");
for (var i = 0; i < nuevoImgs.length; i++) {
  nuevoImgs[i].addEventListener("click", function () {
    var imgSrc = this.src;
    var imgPrice = this.getAttribute("data-price");
    var itemDiv = document.createElement("div");
    itemDiv.innerHTML = '<img src="' + imgSrc + '">' +
      '<span>Precio: $' + imgPrice + '</span>' +
      '<button>Pagar</button>';
    carroDeCompras.appendChild(itemDiv);
    carritoCantidad.innerHTML = parseInt(carritoCantidad.innerHTML) + 1;
  });
}
var seminuevoImgs = document.querySelectorAll(".seminuevo img");

for (var i = 0; i < seminuevoImgs.length; i++) {
  seminuevoImgs[i].addEventListener("click", function (e) {
    var imgSrc = e.target.getAttribute("src");
    var imgPrice = e.target.getAttribute("data-price");
    var carritoCont = document.querySelector(".carrito-cantidad");
    var carritoTotal = document.querySelector(".carrito-total");
    var carritoItems = document.querySelector(".carrito-items");
    var carritoItem = document.createElement("div");
    carritoItem.classList.add("carrito-item");

    // crear el elemento de la imagen
    var carritoImg = document.createElement("img");
    carritoImg.setAttribute("src", imgSrc);
    carritoImg.setAttribute("alt", "Carrito de Compras");

    // crear el elemento de precio
    var carritoPrice = document.createElement("span");
    carritoPrice.classList.add("carrito-precio");
    carritoPrice.textContent = "$" + imgPrice;

    // crear botones y unir
    var carritoDelete = document.createElement("button");
    carritoDelete.classList.add("carrito-borrar");
    carritoDelete.textContent = "Eliminar";

    carritoItem.appendChild(carritoImg);
    carritoItem.appendChild(carritoPrice);
    carritoItem.appendChild(carritoDelete);

    carritoItems.appendChild(carritoItem);

    // actualizar el carrito
    carritoCont.textContent = parseInt(carritoCont.textContent) + 1;
    carritoTotal.textContent = "$" + (parseFloat(carritoTotal.textContent.slice(1)) + parseFloat(imgPrice)).toFixed(2);

    // hacer el carrito visible
    carrito.style.display = "block";
  });
}
*/