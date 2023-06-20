//- Una clase llamada "Estudiante" que tenga:
class Estudiante {

    //1-Una variable llamada nombre
    #nombre;

    //2-Otra variable lista llamada asignaturas con 3 asignaturas: Javascript, HTML, CSS
    #asignaturas;
    constructor (nombre, asignaturas) {
       this.#nombre = nombre;
       this.#asignaturas = asignaturas;
    }
    
    //3-Un método "obtenDatos" que devuelva un objeto con las propiedades nombre y asignaturas
    obtenDatos() {
        return {
            nombre: this.#nombre,
            asignaturas: this.#asignaturas
        }
    }
}

const alumno = new Estudiante("Gabriela" , ["Javascript", "HTML", "CSS"]);

console.log(alumno.obtenDatos());

