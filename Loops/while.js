var students = ["Juan", "Oliver", "Pedro", "Sergio", "Rosa", "Daniel"];

function saludar(names) {
  console.log(`Hola, ${names}`);
}

while (students.length > 0) {
  var st = students.shift();
  saludar(st);
}
