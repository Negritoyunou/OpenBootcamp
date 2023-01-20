class Estudiante {
    constructor(nombre, asignaturas, edad){
        this.nombre = nombre
        this.asignaturas = asignaturas
        this.edad  = edad
    }
    obtenDatos(){
        const obj = {
            nombre: this.nombre,
            asignaturas: this.asignaturas,
            edad: this.edad
        }
        return obj;
    }
}

const Alumno = new Estudiante("Miguel", ["Javascript", "html", "css"], 18)
console.log(Alumno)

console.log(Alumno.obtenDatos())

