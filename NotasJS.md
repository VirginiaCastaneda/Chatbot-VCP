- JS corre del lado del cliente.
## variables

- IDENTIFICADORES: nombres unicos

- Nombres: letras, digitos, guiones bajos y $
1. Pueden comenzar con:
- -letras
- -con $ y _
- Son sensibles a mayus y minus
- No se pueden usar palabras reservadas

## TIPOS DE DATOS

- -Numeros var num =17;
- -Cadenas: var name="viek"
- -objetos: var x = {name:"vike", lastname:"CP"};

- -Dinamicos:
- var a; // undefined
- a = 5;
- print(a);

- a = "Vike"
- print(a)

## Numeros
- decimales
- Numeros muy grandes
- var y = 123e5 // 123 000000 
- var y2 = 123e-5 // 0.00123
## COMILLAS
- var car = "Volvo"; //comillas dobles
- var car2 ='volvo'; comillas simples
- var answer2 = 'He is called "Hector"'; //comilla simples con comilas dobles
- var answer = "Good it's cool";

# Arrays
- Crear operaciones para modificarlo
- var cars = ["Ford", "Volvo", "BMW"];
-  cars[0]; //Ford

# Objetos

``````- var person = {
    firstname: "vike",
    lastanaem; "CP",
    age: 22,
    eyeColor:"Brown"
}
``````

# Template literals (${expresion})
- Son realizar expresiones incrustadas y se pueden usar cadenas de varias lineas para interpolarlas entre ellos
- Encerrados por un caracter ``
- Pueden contener marcadores de peso
- Siempre llevan esas comillas --->``
- Ejemplo:
- let a = 'hola'
- let b = 'mundo'
- console.log(`My first app ${a} ${b}`);

# Funciones
```- function MyFunction(parameter1, parameterN){
    return p1* p2;
}
```
- Una forma
var x = myFunction(4,3);

- Otra
Function Myfunction(a, b){
    return a-b;
}
var xb = Myfunction(4,5)
console.log(xb)

# Arrows Functions
- Alternativa de las funciones regulares,
- Diferencia no hay acceso a cierrtas palabras reservadas como this, aggumrnt, super
- No son para usarse como un metodo o como constructores

- Sintaxis
arraw(p1, p2, ....pn) =>{
    stament
}

=> es esquivalente a {return expression}

- En una funcion arrow, si solo recibe un parametro se puede omitir el parentisis
(p1)=>{}  / p1=>{}

- Sin parametros
- algo()=>{}



## .Map
.map ----> Esun metodo que recorre y crea un nuevo arreglo de los resultados
llama una funcion para cada uno de los elementos en orden 
- Es temporal y no ejecuta cambio en la matriz original
 

