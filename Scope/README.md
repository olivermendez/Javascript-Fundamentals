Scope Global

```js
var nombre = "Oliver";
```

Scope local

```js
//Scope Global
//Este tipo de variables, no pueden acceder a los scope locales que existan en el codigo.
var nombre = "Oliver";

function fun() {
  //Scope Local
  var apellido = "De Santo Domingo";
  //Se puede tener acceso a las varibles globales
  return nombre + " " + apellido;
}

console.log(fun());
//Oliver De Santo Domingo
```
