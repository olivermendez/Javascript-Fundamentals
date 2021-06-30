var num1 = 10;
var num2 = 20;
var num3 = 3;
var str3 = "3";
var str1, str2;

function suma(num1, num2) {
  return num1 + num2;
}

function resta(num1, num2) {
  return num1 - num2;
}

function mult(num1, num2) {
  return num1 * num2;
}

function div(num1, num2) {
  return num1 / num2;
}

function mod(num1, num2) {
  return num1 % num2;
}

function conc(str1, str2) {
  console.log(str1 + str2);
}

//Operadores aritmeticos
function OutOperadoresAritmeticos() {
  console.log(
    "Operadores Aritmeticos " + suma(num1, num2),
    resta(num1, num2),
    mult(num1, num2),
    div(num1, num2),
    mod(num1, num2)
  );
}

function Comparacion(num3, str3) {
  if (num3 == str3) {
    return true;
  } else {
    return false;
  }
}

function ComparacionExacta(num3, str3) {
  if (num3 === str3) {
    return true;
  } else {
    return false;
  }
}

function ComparacionMenorQue(num3, str3) {
  if (num3 < num1) {
    return true;
  } else {
    return false;
  }
}

function ComparacionMayorQue(num3, num1) {
  if (num3 > num1) {
    return true;
  } else {
    return false;
  }
}

function ComparacionMayorOIgual(num3, num1) {
  if (num3 >= num1) {
    return true;
  } else {
    return false;
  }
}

function ComparacionMenorOIgual(num3, num1) {
  if (num3 <= num1) {
    return true;
  } else {
    return false;
  }
}

function imprimirComparaciones() {
  console.log(
    "Comparaciones: " + Comparacion(num3, str3),
    ComparacionExacta(num3, str3),
    ComparacionMayorQue(num3, num1),
    ComparacionMayorOIgual(num3, num1),
    ComparacionMenorQue(num3, num1),
    ComparacionMenorOIgual(num3, num1)
  );
}

imprimirComparaciones();
OutOperadoresAritmeticos();
