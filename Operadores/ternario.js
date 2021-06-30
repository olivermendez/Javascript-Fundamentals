//Se utiliza cuando una condicion sera true o flase, igual que el if.
//(condicion)? true, false
//Si la condicion es true, entonces ejecuta aqui, en caso negativo -> aqui.

console.log("Dame un numero: ");
var num = process.openStdin();

num.addListener("data", function (d) {
  num % 2 == 0 ? console.log("Es par") : console.log("No es par");
});

//num % 2 == 0 ? console.log("Es par") : console.log("No es par");
