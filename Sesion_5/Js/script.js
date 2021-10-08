/* ---------------------------------- Tarea --------------------------------- */
/* --- Crear funcion que permita indicar la cantidad de koders a guardar,
que pida tantos nombre completos de koders como se haya indicado, y 
que imprima el nombre del koder y su numero asignado.

Ejemplo:
input   
   - Freddy Krueger
   - Michael Myers
   - Jason Vorhees

output: 
    koder 1: Freddy Krueger
    koder 2: Michael Myers
    koder 3: Jason Vorhees

    Ejercicio 
Transformar el arreglo en coledcion de objetos
    [
    {
        id:1,
        nombre:'freddy',
        apellido: 'Kruegger',
        iniciales: '()'
    },
    {
        id:2,
        nombre:'freddy',
        apellido: 'Kruegger',
        iniciales: '()'
    }
]


--- */
//Pedir al usuario un numero
//Pedir los datos del koder
//Crear un ciclo que pida los datos del koder segun el numero dado por el usuario
//Revisar que se cumpla el numero de veces que pedimos los datos 
//Pedir nombre 
//Guardar en una variable
//Crear una variable para guardar el numero y el nombre del koder concatenado
//Agregar el string creado a un arreglo 
//Monstrar en consola el arreglo con los koders
/* ----------------------------- Ejercico parte2 ---------------------------- */
//Utilizar el for para llenar los datos que se necesitaran para el objeto a crear
//Crear el objeto una vez que se tengan los elementos completos
//NOTA: Recuerda que los elementos del objeto deben estar creados antes de poder ser asignados al objeto
function createKoder (){
    const cantidad = prompt('Ingresa la cantidad de koders a crear');
    let koders =[];

    for (let index = 1; index <=cantidad; index++)
    {
        
        const nobreCompleto = prompt('Ingresa nombre completo del koder');
        const nombreSeparado = nobreCompleto.split(' ');
        const nombre = nombreSeparado[0].charAt(0).toUpperCase();
        const apellido = nombreSeparado[0].charAt(1).toUpperCase();
        //console.log(nombreSeparado);
        const person = {
            id: index,
            nombre: nombreSeparado[0],
            apellido:nombreSeparado[1],
            iniciales:`(${nombre}.${apellido}.)`,

        }
        //const resultado = `koder ${index}: ${nobreCompleto} (${nombre}.${apellido}.)`;
        koders.push(person);
        

    };
    console.log(koders);
};
createKoder();






/* -------------------------------- Ejercicio ------------------------------- */
//input: Kodemia
//output:aimedoK

//Pedir al usuario que escriba una palabra
//Convertir la palabra en un arreglo. 
//Invertir el arreglo.
let palabra = prompt("Escribe una palabra");
let ArrayPalabra = Array.from(palabra);
console.log(ArrayPalabra);
console.log(ArrayPalabra.reverse());

