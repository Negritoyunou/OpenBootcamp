const misDatos = {
    nombre: "Ignacio", 
    apellido: "Arevalo", 
    edad: 18, 
    altura: 1.74, 
    eresDesarrollador: true 
}

console.log(misDatos.edad)

const datosAjenos = [

    {nombre: "Juan", apellido: "Fernandes", edad: 22, altura: 1.63, eresDesarrollador: false},

    {nombre: "Martin", apellido: "Rodriguez", edad: 20, altura: 1.85, eresDesarrollador: false}
]

datosAjenos.push(misDatos)

console.log(datosAjenos)

datosAjenos.sort((a,b)=> a.edad - b.edad)
console.log(datosAjenos)

