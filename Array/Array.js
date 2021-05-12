//The JavaScript Array class is a global object that is used in the construction of arrays; which are high-level, list-like objects.

//create an Array
var fruits = ['Apple', 'Banana', 'Melon', 'Mango'];
console.log(fruits);


//Access an Array item
var firtsElement = fruits[0];

//Loop over an Array
fruits.forEach(function (item, index, array){
    console.log("Fruits["+item+"] = "+index);
});

//second way to loop
console.log("Second Way to Lopp An Array")
fruits.forEach(element => console.log(element));

//Adding Items to the end of an array
var newItem = fruits.push('Orange');

//Adding Items to the begining of an array
var newItem2 = fruits.unshift('Strawberry');

//Romove the final item an array
var finalItem = fruits.pop();

//Romove the final item an array
var firtsItem = fruits.shift();

