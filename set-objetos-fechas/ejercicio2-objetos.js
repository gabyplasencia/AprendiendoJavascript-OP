//Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)

const misDatos = {
    nombre: "Gabriela",
    apellido: "Plasencia",
    edad: 27,
    altura: 1.75,
    eresDesarrollador: true
};

//Una variable que obtenga tu edad a partir del objeto anterior
const miEdad = misDatos.edad;

//Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s
/*
const datosElsy = {
    nombre: "Elsy",
    apellido: "Garcia",
    edad: 28,
    altura: 1.40,
    eresDesarrollador: false
}
const datosAri = {
    nombre: "Ariana",
    apellido: "Collar",
    edad: 26,
    altura: 1.60,
    eresDesarrollador: false
};

const listaGente = [misDatos, datosElsy, datosAri];
*/

const listaGente = [
    {
        ...misdatos
    },
    {
    nombre: "Elsy",
    apellido: "Garcia",
    edad: 28,
    altura: 1.40,
    eresDesarrollador: false
    },
    {
    nombre: "Ariana",
    apellido: "Collar",
    edad: 26,
    altura: 1.60,
    eresDesarrollador: false
    }
]

//Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor
listaGente.sort((a, b) => b.edad - a.edad)





console.log(listaGente);