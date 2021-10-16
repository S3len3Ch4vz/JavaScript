/* -------------------------- Notación de corchetes ------------------------- */
const person ={

    nombre: 'Ivan',
    apellido: 'Díaz',
    direccion:'Dirección de Ivan Díaz'
};

//Para utilizar la notación de 
//corchetes es necesario encapsular el atributo en una variable

const property = 'direccion';

if ( property in person){
//Mencionas al objeto y la variable que tiene la propiedad del objeto
    person[property] = 'esta es la nueva dirección a agregar';
} else {
    person[property] = 'esta es la dirección a añadir';
}

//console.log(person)
/* -------------------------------------------------------------------------- */
/*                               Spread Operator                              */
/* -------------------------------------------------------------------------- */
/* ------------------------ Spread Operator on Arrays ----------------------- */

const otherNumbers = [3, 56, 78]

const numbers = [1, 2, ...otherNumbers, 345]
const numbersWithoutSpread = [1, 2, otherNumbers, 345]

console.log(numbers)
console.log(numbersWithoutSpread)

/* ----------------------- Spread operator on Objects ----------------------- */

const person2 = {
  nombre: "Luisito",
  apellido: "Comunica",
  direccion: "direccion random",
}

const addressPerson2 = {
  avenue: "",
  number: "120",
  cp: "55029",
}

//Fuse both person2 and addressPerson2 properties in a new obj
const userData = { ...person2, ...addressPerson2 }

console.log(userData) // {with prop from 2 previous objects}

//Destructure an object

// const { avenue, number } = addressPerson2
//returns

const { avenue, number, cp, ...rest } = addressPerson2
console.log(addressPerson2)
//returns

function getProp(addressPerson2) {
  const { avenue } = addressPerson2
  console.log(avenue, "avenue")
}

getProp(addressPerson2)

/* --------------- Ejercicos con metodos Map, filter y Reduce --------------- */
/*
Ejercicio:
*/
const songsData = [
    {
        name: "¿Dónde jugarán los niños?",
        band: "Maná",
        releaseYear: "1992",
        statistics: {
            likes: 20000,
            reproductions: 8000
        },
    },
    {
        name: "La muralla verde",
        band: "Enanitos Verdes",
        releaseYear: "1986",
        statistics: {
            likes: 21000,
            reproductions: 19000
        },
    },
    {
        name: "Te Ví En Un Tren",
        band: "Enanitos Verdes",
        releaseYear: "1987",
        statistics: {
            likes: 20000,
            reproductions: 23490
        },
    },
    {
        name: "Mariposa Traicionera",
        band: "Maná",
        releaseYear: "2002",
        statistics: {
            likes: 12000,
            reproductions: 25690
        },
    },
    {
        name: "Rayando el Sol",
        band: "Maná",
        releaseYear: "1990",
        statistics: {
            likes: 12000,
            reproductions: 18000
        },
    },
    {
        name: "La celula que explota",
        band: "Jaguares",
        releaseYear: "1999",
        statistics: {
            likes: 12000,
            reproductions: 23421
        },
    },
    {
        name: "No dejes que...",
        band: "Jaguares",
        releaseYear: "1999",
        statistics: {
            likes: 12345,
            reproductions: 10000
        },
    }
]

// [
//     'banda1',
//     'banda2',
// ];

/*
- Agrupar los nombres de la bandas, que no esten repetidas
- Agrupar las canciones por banda
- La cancion con más reproducciones
- La cancion con más likes
*/

//- Agrupar los nombres de la bandas, que no esten repetidas 
const filterBandsReduce = () => {
    const reducedBands = songsData.reduce((bands, current) => {
      return bands.includes(current.band) ? bands : bands.concat(current.band)
    }, [])
    return reducedBands
  }

  