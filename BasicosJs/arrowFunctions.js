var numbers = [4, 9, 16, 25];

function myFun() { //Ahorras crear una nueva matriz y usar el ciclo for
    console.log(numbers.map(Math.sqrt)); //recorre todos los elementos que contiene el arreglo, genera una nueva.
}

myFun();

//arraw function

const hello = () => {
    console.log("hola mundo")
}
hello();

//con parametros
const helloFun = (n) => {
    console.log(`Hola ${n} con funciones arrow`)
}
helloFun("Vike");

//Funcion Map
console.log(numbers.map(numbers => numbers.length)); //un solo argumento no lleva parentesis

var materiales = [
    'Helio',
    'Hidorgeno',
    'Litio',
    'Cromo'
]

console.log(materiales.map(materiales => materiales.length)) //me da la longitud de cada uno que tiene materiales