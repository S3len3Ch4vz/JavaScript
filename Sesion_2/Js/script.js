/* //Función de modular

const division =5/2;
const resultado =10%2;
console.log(division);
console.log(division);

const test = 5+5 (5-10)*3;
console.log(test);

//Concatenar y concatenación
const nombre ='Jesus';
const apellido ='Escutia'
console.log('mi nombre es' + nombre + apellido);
console.log(`mi nombre es ${nombre} $ {apellido}`);

//Relacionale y comparación 

console.log(5>4);
console.log('7'== 7);
console.log('6'===6);

//Incremento y Decremento 

console.log(++numero);
console.log(--numero);

//Asignación 

let numero =5;
numero = numero *5; 
numero *= 5;
numero/=5;
numero -=5;


//Lógicos 
// && AND Se deben cumplir que todas las condiciones sean declaradas
// || OR Con que se cumpla una arrojara una verdadera
/* ! Not */

//console.log(7<10 && 6>10);
//console.log(7<10 || 6>10);

//const age =19;
/*En capsulamos la condición
const isAdult = age >=18;

 Evaluamos si la condición es falsa 
if (!isAdult){
    console.log('es adulto');
}

*/ 
//Condiciones multiples

//if (age >= 18 && age <= 25) {
  //  console.log("Es un adulto entre 18 y 25 años");
//}

//Valores falsy y truthys 
false            
undefined
null
NaN
''
0

if (!''){
    console.log('esto es falso')
}

//Truthys
{}
[]
'a'
true
if ('a'){
    console.log('esto es verdadero')
}

//switch 
const currentDay =0;
//domingo < - 0
//lunes <- 1

switch (currentDay) {
    case 0: 
    console.log('es domingo')
    break;

    case 1:
        console.log('es lunes')
        break;

        case 2:
        console.log('es martes')
        break;

            default:
            console.log('es lunes')
            break;
}

//Operador ternario
const age=19;
const resultado = age > 28 ? 'es adulto' : 'no es adulto';
console.log(resultado)

/*1.-Pedir al usuario por prompt un número entre 1 y 100
-Verificar si es un par o impar e imprimir en resultado en consola 
*/ 

let num=prompt(); 
defNum=num%2;
if (defNum !=0){
    console.log("El numero es impar");

}else {
    console.log("El numero es par");
}

/* 2.- Pedir al usuario 2 números
    - Imprimir en consola cuál es el menor de los 2
    - Imprimir en consola cuál es el mayor de los 2
*/

let num1,num2;
num1=prompt();
num2=prompt();

if (num1>num2) {
    console.log(num1 + " mayor que " +num2);
    console.log(num2 + " es el menor");
    
} else if (num1<num2) {

    console.log(num2 + " mayor que " +num1);
    console.log(num1 + " es el menor");
} else if (num1==num2) {
    console.log(num1 + " es igual a " +num2);
}

/*
3.- Pedir al usuario los siguientes datos (nombre,peso actual kg)
    - Calcular el peso que tendria esa persona en la luna e imprimirlo en consola
*/
let nombre = prompt("¿Puedes decirme tu nombre? ");
let peso =prompt("¿Tu peso cuál es? ");
let pesoLunar;
pesoLunar=((peso / 9.81) * 1.622);
console.log("Tu peso en la Luna sería "+pesoLunar);


/* 4.- Pedir al usuario la calificacion de un examen (0 a 100) por el promt: 
    - Imprimir en consola las equivalencias en letra su calificación, es decir: 

    si es mayor o igual a 90, imprimir "A"
    
    si es mayor o igual a 80 y menor a 90, imprimir "B"

    si es mayor o igual a 70 y menor a 80, imprimir "C"

    si es mayor o igual a 60 y menor a 70, imprimir "D"

    si es mayor o igual a 50 y menor a 60, imprimir "E"

    si es menor a 50, imprimir "F"
*/
let calificacion =window.prompt('Escribe la calificación del examen del 0 a 100');


        if (calificacion>=90){
            console.log("El alumno tiene una A")
        }
            else if (calificacion>=80 && calificacion<90){
                console.log("El alumno tiene una B")
            }

                else if (calificacion>=70 && calificacion<80){
                    console.log("El alumno tiene una C")
                }

                    else if (calificacion>=60 && calificacion<70){
                        console.log("El alumno tiene una D")
                    }

                        else if (calificacion>=50 && calificacion<60){
                            console.log("El alumno tiene una E")
                        }

                        else{
                            console.log("El alumno tiene una F")

                         }



