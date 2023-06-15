//La fecha de hoy
const fecha = new Date();

//La fecha de tu nacimiento
const fechaNac = new Date(1995, 9, 27);

//Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento
const esTarde = fecha > fechaNac

//Una variable que contenga el día de tu nacimiento
const diaNac = fechaNac.getDate();

//Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)
const mesNac = fechaNac.getMonth() + 1;

//Una variable que contenga el año de tu nacimiento (con 4 dígitos)
const anhoNac = fechaNac.getFullYear();




console.log(anhoNac);