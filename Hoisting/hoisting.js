console.log(nombre);
//undefined

var nombre;
nombre = "Oliver";

//hoisting con funciones
saludar();

//Aqui deberia estar la inicializacion de mi varible nombreNuevo, para que lo tome en cuenta la funcion.

//Las funciones, no se deben llamar antes de la inicializacion.

function saludar() {
  console.log("Hola " + nombreNuevo);
  //Hola undefined
}

var nombreNuevo = "Oliver";
