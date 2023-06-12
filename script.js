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

document.getElementById('formulario-login').addEventListener('submit', async (e) => {
  e.preventDefault();

  const correo = document.getElementById('correo').value;
  const contrasena = document.getElementById('contrasena').value;

  const datos = await cargarJson();
  const empleados = datos.empleado;

  if (validarCredenciales(correo, contrasena, empleados)) {
    // Inicio de sesión exitoso
    console.log('Inicio de sesión exitoso');
  } else {
    // Credenciales incorrectas
    console.log('Credenciales incorrectas');
  }
});
