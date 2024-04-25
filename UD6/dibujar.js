/***** FUNCIONES PARA DIBUJAR LA TABLA *****/

// Función para crear la tabla
const crearTabla = () => {
    // Crear la tabla
    let tabla = document.createElement('table');

    // Asignar id a la tabla
    tabla.id = 'tabla';

    // Añadir la clase para aplicar los estilos CSS
    tabla.classList.add('tablerodibujo');
    
    //Crear el titulo de la tabla y asignarlo
    let titulo = document.createElement('caption');
    titulo.textContent = 'Haga CLICK en cualquier celda para activar/desactivar el Pincel'; 
    tabla.appendChild(titulo);

    // Generar las filas y celdas
    for (let i = 0; i < 30; i++) {
        let fila = document.createElement('tr');
        
        for (let j = 0; j < 30; j++) {
            let celda = document.createElement('td');
            celda.classList.add('tablerodibujo'); //aplicar el estilo
            fila.appendChild(celda);   
        }

        tabla.appendChild(fila);
    }

    // Agregar la tabla al cuerpo del documento
    document.body.appendChild(tabla);

    return tabla;
}

// Función para limpiar la zona de dibujo
const limpiarZonaDibujo = () => {
    let zonaDibujo = document.getElementById('zonadibujo');
    zonaDibujo.innerHTML = '';
}

// Función para agregar la tabla a la zona de dibujo
const agregarTablaAZonaDibujo = (tabla) => {
    let zonaDibujo = document.getElementById('zonadibujo');
    zonaDibujo.appendChild(tabla);
}

// Función para crear la tabla y dibujarla
const dibujarTabla = () => {
    const tabla = crearTabla();
    limpiarZonaDibujo();
    agregarTablaAZonaDibujo(tabla);
}

/***** FUNCIONES PARA GESTIONAR EVENTOS DE LA TABLA *****/

// Función para agregar eventos de movimiento del ratón a las celdas de la tabla
const agregarEventosMovimientoTabla = () => {
    const tabla = document.getElementById('tabla');
    const celdasTabla = tabla.getElementsByTagName('td');

    for (let i = 0; i < celdasTabla.length; i++) {
        celdasTabla[i].addEventListener('mouseover', function() {
            // Pintar la celda si el pintado continuo está activo
            if (pintadoActivo) {
                celdasTabla[i].style.backgroundColor = colorSeleccionado;
            }
        });
    }
}

// Función para agregar eventos de clic a las celdas de la tabla
const agregarEventosClicTabla = () => {
    const tabla = document.getElementById('tabla');
    const celdasTabla = tabla.getElementsByTagName('td');

    for (let i = 0; i < celdasTabla.length; i++) {
        celdasTabla[i].addEventListener('click', function() {
            // Alternar el estado del pintado continuo
            pintadoActivo = !pintadoActivo;

            // Pintar la celda sobre la que se hace click si el pintado está activo.
            if (pintadoActivo) {
                celdasTabla[i].style.backgroundColor = colorSeleccionado;
            }

            //Actualiza el mensaje del estado de pincel tras cada click en la tabla.
            actualizarMensajePincel();
        });
    }
}

/***** FUNCIONES GESTIONAR EVENTOS DE LA PALETA DE COLORES *****/

// Función para agregar eventos de clic a las celdas de la paleta
const agregarEventosClicPaleta = () => {
    const paleta = document.getElementById('paleta');
    const celdasPaleta = paleta.getElementsByTagName('td');

    for (let i = 0; i < celdasPaleta.length; i++) {
        celdasPaleta[i].addEventListener('click', function() {
            
            // Borrar la clase 'seleccionado' de todas las celdas.
            borrarSeleccionado();
            
            // Agregar la clase 'seleccionado' a la celda clicada
            celdasPaleta[i].classList.add('seleccionado');

            // Almacenar el color seleccionado en la variable global
            colorSeleccionado = window.getComputedStyle(celdasPaleta[i]).getPropertyValue('background-color');
        });   
    }
}

// Función que borra la clase seleccionado de todos los elementos de la paleta.
const borrarSeleccionado = () => {
    const paleta = document.getElementById('paleta');
    const celdasPaleta = paleta.getElementsByTagName('td');

    for (let j = 0; j < celdasPaleta.length; j++) {
        celdasPaleta[j].classList.remove('seleccionado');
    }
}

//Función que actualiza el mensaje del estado del pincel
const actualizarMensajePincel = () => {
    const estadoPincel = document.getElementById('pincel');

    if (pintadoActivo) {
        estadoPincel.textContent = "PINCEL ACTIVADO";
    } else {
        estadoPincel.textContent = "PINCEL DESACTIVADO";
    }
}


/***** SECCIÓN PRINCIPAL *****/

// Llamar a las funciones al cargar el DOM
document.addEventListener('DOMContentLoaded', () => {
    //Variable para controlar si el pintado está activo.
    pintadoActivo = false;

    //Inicializar el color seleccinado al primero de la paleta.
    const primeraCeldaPaleta = document.getElementById('paleta').getElementsByTagName('td')[0];
    colorSeleccionado = window.getComputedStyle(primeraCeldaPaleta).getPropertyValue('background-color');

    dibujarTabla();
    agregarEventosClicPaleta();
    agregarEventosClicTabla();
    agregarEventosMovimientoTabla();
    
});







