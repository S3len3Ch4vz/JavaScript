/* CICLOS */

// const nombres = [
//     { nombre: 'freddy',}, 
//     { nombre: 'michael'} , 
//     { nombre: 'rafa'}
// ];

// const person = {
//     nombre: 'freddy',
//     apellido: 'Krueger',
//     edad: 40,
// };

// console.log(nombres[1])
// console.log(nombres[0])
 /* -----------------------------------  FOR ---------------------------------- */
// for (let i = 0; i < nombres.length; i++) {
//     console.log(nombres[i].nombre)
//     // const element = array[index];
// }

let vuelta = 0;

while(vuelta < 10) {
    console.log(vuelta, 'vuelta')
    if(vuelta % 2 === 0) {
        console.log(`${vuelta} es par`)
    } else {
        console.log(`${vuelta} es impar`)
    }
    // console.log('se cumpli condicion con while')
    vuelta++
}

// for ( killer in person ) {
//     console.log(killer)
//     console.log( person[killer] )
// }



/*
    Ejercicio 1:
    Pedir al usuario usuario un numero entre 1 y 10
    Imprimir la tabla de multiplicar de ese número
    p.ej.
    3 x 1 = 3
    3 x 2 = 6
*/
let num,mult;
    num=prompt("¿Podrias darme un numero entre el 1 y 10?");
   for(let i=1;i<=10;i++)
   {
    mult=num*i;
    console.log(`${num} x ${i} = ${mult}`);
   }
    


/*
Ejercicio 2:
Pedir al usuario un numero entre 10 y 100
Imprimir todos los numeros pares que existen entre 1 y ese numero
*/
//Pedir o hacer que el usuario ingrese un numero entre 10 a 100
//Identificar si el numero es par o no
//Identificar cuantos numeros apartir del escrito hay 
//Repetir la secuencia de acciones para ambas instrucciones 
//Imprimir el resultado de los numeros identificados como pares
let definirnumero;
let numeroApedir=prompt("¿Podrias darme un numero entre el 10 y 100?");
for(i=0;i<=numeroApedir;i++){
    console.log(`Numero pares de ${numeroApedir} = ${i++}`);
   
}





/*
Ejercicio 3:
Imprimir en consola la suma total de todos los digitos de una cantidad p.ej. "1234" -> 10
*/
//Pedir una cantidad al usuario 
//Iniciar un ciclo para repitirse hasta la cantidad inicializada 
//Iniciar una variable suma para sumar la variable inicializada con 10 y la controladora
//Imprimir el resultado de la sumas. 
let sumas;
let cantidad=prompt("Escribe un numero");
for (i=1;i<=cantidad;i++){
    sumas=(i)+i++;
    console.log(`${sumas}` );
}
/*
Ejercicio 4:
Imprimir en consola el siguiente patrón
*
**
***
****
*****
******
*******
********
*********
**********
*/
