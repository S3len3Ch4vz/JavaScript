/* ------------------------- Funciones Constructoras ------------------------ */
//es la versión de JavaScript de una clase.
const person = {
    name:'Yo',
    apellido: 'Soy'
}
/*En buenas practicas para las funciones constructoras se utiliza 
mayuscula al incio del nombre de la función*/
function Persona (name,lastname){
 this.name = name;
 this.lastname = lastname;
// this.saludar = function (){
  //   console.log(`Hola soy $[this.name]`)
 //}

};

//Para crear la funcion construsctora se necesita declararla con un new 
const person1 = new Persona('Yopli', 'Soy');
const person2 = new Persona('NombredePersona', 'ApellidodePersona');
//También podemos utilizar la constructoras con el punto prototype
Persona.prototype.saludar=function(){
    console.log(`Hola soy $[this.name]`)

}

console.log(person2);

const koders = [
    {
      name: 'Harold', 
      lastName: 'López',
      birthday: '1996/06/24',
      generation: 9,
      bootcamp: 'JavaScript',
      scores: [
          {
              module: 'Frontend',
              score: 90
          },
          {
              module: 'Backend',
              score: 80
          },
          {
              module: 'Cloud',
              score: 80
          },
      ]
    },
  
    {
              name: 'Arnold', 
              lastName: 'Osborn',
              birthday: '1998/05/12',
              generation: 1,
              bootcamp: 'Python',
              scores: [
                  {
                      module: 'Frontend',
                      score: 90
                  },
                  {
                      module: 'Backend',
                      score: 100
                  },
                  {
                      module: 'Cloud',
                      score: 100
                  },
              ]
          },
          {
                    name: 'Peter', 
                    lastName: 'Parker',
                    birthday: '1994/10/26',
                    generation: 10,
                    bootcamp: 'JavaScript',
                    scores: [
                        {
                            module: 'Frontend',
                            score: 100
                        },
                        {
                            module: 'Backend',
                            score: 95
                        },
                        {
                            module: 'Cloud',
                            score: 80
                        },
                    ]
                },
                {
                          name: 'Homer', 
                          lastName: 'Simpson',
                          birthday: '1996/06/24',
                          generation: 1,
                          bootcamp: 'Python',
                          scores: [
                              {
                                  module: 'Frontend',
                                  score: 98
                              },
                              {
                                  module: 'Backend',
                                  score: 100
                              },
                              {
                                  module: 'Cloud',
                                  score: 70
                              },
                          ]
                      },
  ];

/*
Ejercicio en clase:
Teniendo la siguiente coleccion de Koders generar una coleccion de objetos de tipo Koder. Agregando además las siguientes funciones:
Prototipo de tipo koder
Obtener la edad a partir de la fecha de nacimiento
Obtener promedio de sus scores
---
Colección de Koder que pertenezcan a JavaScript
Colección de Koder que pertenezcan a Python
{
  kavascrip: [
    koder1
  ],
  python: [
    
  ]
}
*/

/*Crear el Prototipo de tipo koder con la funcion construsctora
Declarar o instanciar el prototipo con new 
Obtener los datos del arreglo koders en el objeto o funcion constructora
Creamos una función que nos intere y devuelva un arreglo con esos objetos

*/

function Koder (name, lastName, birthday, generation, bootcamp){
    this.name = name;
    this.lastName = lastName;
    this.birthday = birthday;
    this.generation = generation;
    this.bootcamp = bootcamp;

}

//function Koder (Array){
//  this.Array = Array;
//}

function DataKoder (){
   const KoderData = koders.map( (data) => {
      return new Koder (data.name , data.lastName, data.birthday, data.generation, data.bootcamp);
   });
   return KoderData;
}
console.log(DataKoder());
/*
Obtener la edad a partir de la fecha de nacimiento
Acceder a la edad del arreglo 

*/

