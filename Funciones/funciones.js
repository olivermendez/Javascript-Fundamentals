//forma declarativa
function miFuncion1() {
  return 3;
}

//Creando funcion de forma Expresiva, tambien conocidas como funciones anonimas
var miFuncion2 = function (a, b) {
  return a + b;
};

console.log(miFuncion2(2, 4));

function saludar(estudiante) {
  console.log(estudiante);
}

console.log(saludar("Diego"));

function saludarConString(student) {
  console.log(`hola ${student}`);
}
console.log(saludarConString("Oliver"));
