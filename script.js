async function cargarJson() {
    const respuesta = await fetch('bd.json');
    const datos = await respuesta.json();
    return datos;
  }

function validarCredenciales(correo, contrasena, empleados) {
  for (let empleado of empleados) {
    if (empleado.correo_empleado === correo && empleado.contrasena === contrasena) {
      return true;
    }
  }
  return false;
}

function mostrarMensajeError() {
    const mensajeErrorDiv = document.getElementById('mensaje-error');
    mensajeErrorDiv.textContent = '¡Credenciales incorrectas! Por favor, verifica tu correo electrónico y contraseña.';
}

document.getElementById('formulario-login').addEventListener('submit', async (e) => {
  e.preventDefault();

  const correo = document.getElementById('correo').value;
  const contrasena = document.getElementById('contrasena').value;

  const datos = await cargarJson();
  const empleados = datos.empleado;

  const mensajeError = document.getElementById('mensaje-error');


  if (validarCredenciales(correo, contrasena, empleados)) {
    // Inicio de sesión exitoso
    window.location.href = 'catalogo.html';
  } else {
    // Credenciales incorrectas
    window.location.href = 'index.html';
  }
});
