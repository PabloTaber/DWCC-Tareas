# Repositorio para la asignatura DWCC

Este repositorio contiene las tareas realizadas para la asignatura "Desenvolvemento web en contorno cliente".

## Tarea Actual: Tarea UD06

### Comentarios

Se realiza el script solicitado para la resolución de la tarea.

![image](https://github.com/PabloTaber/DWCC-Tareas/assets/137113370/0817f934-b40f-4c22-a287-434dd1e3fee5)

Consideraciones de implementación: 
- Se utiliza una variable global "pindatoActivo" para controlar si se está pintando sobre la tabla o no.
- Se utiliza una variable global "colorSeleccionado" para saber en todo momento el color que está seleccionado en la paleta de colores.
- Se utilizan constantes para los valores por defecto de la tabla.




## Tarea UD05

### Comentarios

Se realiza el script solicitado para la validación de un formulario html.

Consideraciones de implementación: 
- Se validan todos los campos del formulario en el momento de pulsar el boton enviar, mostrando mensajes de error para cada uno de los campos en los que falle la validación.
- De cada campo se valida primero que no sea vacío (todos los campos son obligatorios) y después que cumplan con los formatos requeridos.
- En caso de que falle la validación para varios campos el foco del formulario irá al último campo en el que ha fallado la validación.
- Al boton limpiar se le añaden funcionalidades para que además de limpiar los campos del formulario, tambien borre los errores e intentos de pantalla, además de reiniciar el contador de intentos a 0.

### Capturas de error

- Formulario vacío.
  
  ![image](https://github.com/PabloTaber/DWCC-Tareas/assets/137113370/b6016da1-247f-4b75-a5ae-41a9a0c7e2bd)

- Campo Nombre con caracteres númericos.

  ![image](https://github.com/PabloTaber/DWCC-Tareas/assets/137113370/c27ccc4e-959d-4f86-b8d5-7ea41f09a153)

- Campo Apellidos con caracteres especiales.

  ![image](https://github.com/PabloTaber/DWCC-Tareas/assets/137113370/0e1d188b-ddde-4d04-8d90-2cbbaa9b2297)

- Campo Edad con caracteres no númericos.

  ![image](https://github.com/PabloTaber/DWCC-Tareas/assets/137113370/95bfcffb-5f06-4782-88a2-882b58db8950)

- Campo Edad fuera del rango.

  ![image](https://github.com/PabloTaber/DWCC-Tareas/assets/137113370/2406188b-184c-4b02-907a-1e522935f73b)

- Campo NIF con formato incorrecto (sin guión).

  ![image](https://github.com/PabloTaber/DWCC-Tareas/assets/137113370/ca094249-f651-456f-8047-f9eed8996d2e)

- Campo Email con formato incorrecto (dos @).

  ![image](https://github.com/PabloTaber/DWCC-Tareas/assets/137113370/e03b5499-8680-4910-a72e-ba8f491c1f03)
  
- Campo Fecha de nacimiento con formato incorrecto (mezclando / y -).

  ![image](https://github.com/PabloTaber/DWCC-Tareas/assets/137113370/48f2f6be-0674-4c67-954a-ccb6f2a40bfb)

- Campo Teléfono con formato incorrecto (un espacio en blanco).

  ![image](https://github.com/PabloTaber/DWCC-Tareas/assets/137113370/603aeae6-0afe-49b6-8c22-d40c99ed31b2)

- Campo Hora de visita con formato incorrecto (introduciendo formato hh:mm:ss).

  ![image](https://github.com/PabloTaber/DWCC-Tareas/assets/137113370/14fddc8c-c12f-48fc-b9b4-c8821404f1cd)


## Tarea:  UD2.2

### Comentarios

Se crea el objeto disco con los métodos solicitados. Para la prueba de ejecución se crean dos discos con el método constructor y uno con el método cargarDatos(), que se van almacenando en un array. Posteriormente se visualizan utilizando el método verColeccion() que recorre el array llamando al método verInfoDisco() para cada objeto disco.

### Captura de ejecución

![image](https://github.com/PabloTabernero/dwcc/assets/146489846/c80d3cf1-d239-4504-a052-3337cc7f6e43)
