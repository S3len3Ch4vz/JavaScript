/* Ejercicio 1:
Solicitar al usuario su nombre y sus apellidos
    regresar en una sola cadena donde el nombre sea 
    minusculas y los apellidos sean mayusculas
    ejem: 
    input nombre = "Ivan"
    input Apellido = "Diaz"
    Output: "ivan DIAZ"
*/
let nombre= prompt("Dime tu nombre");
let apellido= prompt("Dime tu apellido");
let name = nombre.toLocaleLowerCase();
let subname= apellido.toLocaleUpperCase();

console.log("Tu nombre es", name, " "+ subname);

/* Ejercicio 2:
   Solicitar el nombre completo de un usuario 
   e indicarle cuantos caracteres tiene su nombre
*/
let nom= prompt("Dime tu nombre completo");
console.log("Tu nombre tiene ", nombre.length, "letras");

/* Ejercicio 3:
   Solicitar el nombre completo a un usuario e 
   indicarle cuantas vocales tiene.

let contoname;
let vowels=['a','e','u','i','o'];
let oname=prompt("Dime tu nombre(s)");
contoname=oname.length;
let converterName=oname.split(vowels);
console.log(converterName);

/*
Ejercicio 4:
    Del texto: 
    "Cada estudiante tiene su ritmo, cada estudiante tiene su talento, y cada estudiante complementa 
    al estudiante que tiene a su lado"
    - Contar cuántas veces se usa la palabra "estudiante" y reemplazar todas las coincidencias 
        por la palabra "Koder", 
    - y mostrar el mensaje de nuevo al usuario
*/
let estudiante ='Cada estudiante tiene su ritmo, cada estudiante tiene su talento, y cada estudiante complementa al estudiante que tiene a su lado';
let covertstudent=estudiante.search('estudiante');
let overwrite=estudiante.replace("estudiante", "Koder");
console.log(covertstudent);
console.log(overwrite);
/*
Ejercicio 5:
    Dado un string de dos palabras realizar una función que devuelva la palabra más larga
    input: 'Programación Javascript'
    Output: 'Programación'
*/
let palabra1='Programación Javascript';
let palabra2='Programación';

if (palabra1.length>palabra2.length){
    console.log("La palabra ",palabra1, " es más larga");
}else {
    console.log("La palabra ",palabra2, " es más larga");
}