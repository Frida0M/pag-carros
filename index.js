window.onload = function() {
  var imagen = document.querySelector(".slide-img");
  var boton1 = document.querySelector(".boton1");
  var boton2 = document.querySelector(".boton2");
  var contador = 0;
  boton1.style.display="none";
  arreglo=["/autos/logo_VW.png", "/autos/logo_NISSAN.png", "/autos/logo_KIA.jpeg"]
  boton1.addEventListener("click", function () {
    imagen.setAttribute("src", arreglo[contador-1]);
    contador--;
    console.log(contador);
    console.log(arreglo[contador]);
    if (contador == 0) {
      boton1.style.display="none";
      boton2.style.display="block";
    }
    if (contador > 0 && contador < 2) {
    boton1.style.display="block";
    boton2.style.display="block";
    }
  });
  boton2.addEventListener("click", function () {
    imagen.setAttribute("src", arreglo[contador+1]);
    contador++;
    console.log(contador);
    console.log(arreglo[contador]);
    if (contador == 2) {
      boton1.style.display="block";
      boton2.style.display="none";
    }
    if (contador > 0 && contador < 2) {
    boton1.style.display="block";
    boton2.style.display="block";
    }
  });
};
