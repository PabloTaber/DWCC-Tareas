//Evento para asegurar que está cargado todo el DOM antes de ejecutar el código js
document.addEventListener("DOMContentLoaded", function () {

/***** Código de validaciones del formulario *****/ 

//Patrones para las validaciones
let patronNombre = /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]{1,20}$/;
let patronApellido = /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]{1,40}$/;
let patronEmail = /^\S+@\S+\.(com|net|es|gal|org)$/;
let patronUser = /^[a-zA-Z0-9]{1,20}$/;
let patronPass = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_]).{8,}$/;
let patronTelefono = /^\d{9}$/;

/***** FUNCIONES DE VISUALIZACIÓN INFORMACIÓN ******/

//Función que agrega los errores del formulario al id error para despues mostrarlos todos juntos.
function agregarErrores(mensaje) {
    const errores = document.getElementById("error");
    if (errores) {
      errores.innerHTML += `<p>${mensaje}</p>`;
    } 
  }

// Función que borra y oculta los errores y respuestas
const limpiarFormulario = () => {
    //Limpiar los errores
    document.getElementById("error").innerHTML = '';
    document.getElementById("error-validacion").style.display = "none";
    //Limpiar respuestas
    document.getElementById("respuesta-servidor").innerHTML = '';
    document.getElementById("info-respuesta").style.display = "none";
};
  
// Función que muestra el div de errores
const mostrarErrores = () => {
    document.getElementById("error-validacion").style.display = "block";
};


/***** FUNCIONES PARA VALIDACION *****/

//Función para validar el campo nombre
const validarNombre = () => {
    let nombre = document.getElementById("nombre").value.trim();
  
    if (!nombre) {
        agregarErrores("El campo nombre es obligatorio.");
        return false;
    } else if (!patronNombre.exec(nombre)) {
        agregarErrores("Campo nombre inválido.");
        return false;
    }
  
    return true;
};

//Función para validar el campo apellido
const validarApellidos = () => {
    let apellidos = document.getElementById("apellidos").value.trim();
  
    if (!apellidos) {
        agregarErrores("El campo apellidos es obligatorio.");
        return false;
    } else if (!patronApellido.exec(apellidos)) {
        agregarErrores("Campo apellidos inválido.");
        return false;
    }
  
    return true;
};

//Función para validar email
const validarEmail = () => {
    let correo = document.getElementById("correo").value.trim();
  
    if (!correo) {
        agregarErrores("El campo Email es obligatorio.");
        return false;
    } else if (!patronEmail.exec(correo)) {
        agregarErrores("Campo Email inválido.");
        return false;
    }
  
    return true;
};

//Función para validar user
const validarUser = () => {
    let usuario = document.getElementById("usuario").value.trim();
  
    if (!usuario) {
        agregarErrores("El campo Usuario es obligatorio.");
        return false;
    } else if (!patronUser.exec(usuario)) {
        agregarErrores("Campo usuario inválido.");
      return false;
    }
  
    return true;
};

//Función para validar contraseña
const validarPass = () => {
    let clave = document.getElementById("clave").value.trim();
  
    if (!clave) {
        agregarErrores("El campo Contraseña es obligatorio.");
        return false;
    } else if (!patronPass.exec(clave)) {
        agregarErrores("Campo contraseña inválido.");
        return false;
    }
  
    return true;
};

//Función para validar telefono
const validarTelefono = () => {
    let telefono = document.getElementById("telefono").value.trim();
  
    if (!telefono) {
        agregarErrores("El campo teléfono es obligatorio.");
        return false;
    } else if (!patronTelefono.exec(telefono)) {
        agregarErrores("Campo teléfono inválido.");
        return false;
    }
  
    return true;
};

//Función para validar todos los campos del formulario
const validarFormulario = (e) => {
    e.preventDefault();

    limpiarFormulario();

    const validacionNombre = validarNombre();
    const validacionApellidos = validarApellidos();
    const validacionEmail = validarEmail();
    const validacionUsuario = validarUser();
    const validacionClave = validarPass();
    const validacionTelefono = validarTelefono();


    if (!validacionNombre | !validacionApellidos | !validacionEmail | !validacionUsuario
        | !validacionClave | !validacionTelefono ) {
        mostrarErrores();
        return;
    }

    enviarFormulario();
}


/***** Envio de datos con XMLHttpRequest *****/ 

const enviarFormulario = () => {
    //Obtener los datos del formulario
    const nombre = document.getElementById('nombre').value;
    const apellidos = document.getElementById('apellidos').value;
    const correo = document.getElementById('correo').value;
    const usuario = document.getElementById('usuario').value;
    const clave = document.getElementById('clave').value;
    const telefono = document.getElementById('telefono').value;

    //Construir la cadena de datos a envair
    const datos = `nombre=${encodeURIComponent(nombre)}&apellidos=${encodeURIComponent(apellidos)}
        &correo=${encodeURIComponent(correo)}&usuario=${encodeURIComponent(usuario)}&clave=${encodeURIComponent(clave)}
        &telefono=${encodeURIComponent(telefono)}`;

    // Crear la solicitud XMLHttpRequest
    let peticion = new XMLHttpRequest();
    peticion.open('POST', "http://localhost/php/registrar.php"); 
    peticion.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    peticion.send(datos);
    peticion.addEventListener("load", function() {
        document.getElementById("info-respuesta").style.display = "block";
        document.getElementById("respuesta-servidor").innerHTML = peticion.responseText;
    });
}


/***** EVENTOS *****/

const enviar = document.getElementById("enviar");

enviar.addEventListener("click", validarFormulario);


})