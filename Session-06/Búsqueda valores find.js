// Iterar los valores de una lista
const array = ["warchi", 11, 69, 5, false, undefined]

// Forma antigua (poco eficiente)
for(let i = 0; i < array.length; i++){
    console.log(array[i])
}

// Forma ES6 (más eficiente) .forEach()
let suma = 0;
const arrayNums = [4, 65, 77, 10, 11, 32]
arrayNums.forEach(valor => {
    suma += valor;
    console.log(valor)
})
console.log(suma)

// Búsqueda de un valor dentro de una lista .find()
// Quiero encontrar el elemento 69
const variable = array.find(valor =>{
    if(valor === 69){
        return true
    }         
})

console.log(variable)


const listaObjetos = [
    { nombre: "Archi", edad: 22 },
    { nombre: "Negrito", edad: 18},
    { nombre: "Albert", edad: 32},
    { nombre: "Juan", edad: 27}
]

//const objeto = listaObjetos.find(o =>{
//    if(o.nombre === "Albert"){
//        return true
//    }
//})

//const objeto = listaObjetos.find(o =>{
//        return o.nombre === "Albert"
//})

const objeto = listaObjetos.find(o => o.nombre === "Albert")
console.log(objeto.edad)

const { edad } = listaObjetos.find(o => o.nombre === "Albert")
console.log(edad)