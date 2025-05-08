"use strict";

console.log("Hello, World!");
//Decclaration of variables

let fullName = "John Doe";
var age = 30;
const country = "USA";

console.log(fullName, age, country);

//objeto
let person = {
    name: "John",
    age: 30,
    country: "USA",
};


function sumar(a, b) {
    let result = a + b;
    return result;
}
console.log(sumar(5, 0));




for (let tabla = 1; tabla <= 10; tabla++) {
    let base = 8
    let mul = base * tabla
    console.log(base + " X " + tabla + " = " + mul);
}





function ultimoDigito(numero) {
    let numstr = numero.toString();
    let numult = numstr[numstr.length - 1];

    if (numult == 4) {
        return  "Es un 4";
    }else {
        return "No es un 4";
    }
    
}

console.log(ultimoDigito(2));





