/***** CONSTANTES *****/
const NUMERO_FILAS = 30;
const NUMERO_COLUMNAS = 30;
const ESTILO_TABLA = 'tablerodibujo';
const TITULO_TABLA = 'Haga CLICK en cualquier celda para activar/desactivar el Pincel';

/***** FUNCIONES PARA CREAR LA TABLA *****/

// Función para crear la tabla, acepta el numero de filas, columnas y estilo a aplicar.
// Devuelve una tabla.
const crearTabla = (numeroFilas, numeroColumnas, estilo) => {
    // Crear la tabla
    let tabla = document.createElement('table');

    // Asignar id a la tabla
    tabla.id = 'tabla';

    // Añadir la clase para aplicar los estilos CSS
    tabla.classList.add(estilo);
    
    //Crear el titulo de la tabla y asignarlo
    let titulo = document.createElement('caption');
    titulo.textContent = TITULO_TABLA; 
    tabla.appendChild(titulo);

    // Generar las filas y celdas
    for (let i = 0; i < numeroFilas; i++) {
        let fila = crearFila(numeroColumnas);        
        tabla.appendChild(fila);
    }

    return tabla;
}


// Función para crear una celda, acepta un estilo a aplicar como parametro de entrada.
// Devuelve una celda con el estilo aplicado.
const crearCelda = (estilo) => {
    let celda = document.createElement('td');
    celda.classList.add(estilo); //aplicar el estilo

    return celda;
}

// Función para crear una fila, acepta el numero de celdas que componen la fila.
// Devuelve un fila con el numero de celdas solicitado.
const crearFila = (numeroCeldas) => {
    let fila = document.createElement('tr');
        
        for (let j = 0; j < numeroCeldas; j++) {
            let celda = crearCelda('tablerodibujo');
            fila.appendChild(celda);   
        }

    return fila
} 

// Función para agregar la tabla a la zona de dibujo
const dibujarTabla = (tabla) => {
    let zonaDibujo = document.getElementById('zonadibujo');
    zonaDibujo.appendChild(tabla);
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

    //Crear tabla e imprimirla por pantalla.
    let tabla = crearTabla(NUMERO_FILAS, NUMERO_COLUMNAS, ESTILO_TABLA);
    dibujarTabla(tabla);
    
    //Incorporar eventos.
    agregarEventosClicPaleta();
    agregarEventosClicTabla();
    agregarEventosMovimientoTabla();
});







