//Una variable que contenga la lista de la compra (mínimo 5 elementos)
const listaCompra = ["leche", "arroz", "harina", "queso", "pan"];

//Modifica la lista de la compra y añádele "Aceite de Girasol"
listaCompra.push("Aceite de girasol");

//Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
listaCompra.pop();

//Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
const listaPeliculas = [
    {titulo: "Orgullo y Prejuicio", director: "Joe Wright", "fecha": new Date("february 10 2006")},
    {titulo: "Riddick", director: "David Twohy","fecha": new Date("september 06 2013")},
    {titulo: "Advengers Infinity War", director: "Hermanos Russo","fecha": new Date("april 27 2018")}
];

//Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)

const pelicula = listaPeliculas.filter(peli => peli.fecha > new Date("january 01 2010"));
console.log(pelicula)

//Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
const listaDirectores = listaPeliculas.map((peli) => peli.director);

//Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
const listaTitulos = listaPeliculas.map((peli) => peli.titulo);

//Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
listaDT = listaDirectores.concat(listaTitulos);

//Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)
listaDT2 = [...listaDirectores, ...listaTitulos];




console.log(listaDT2);