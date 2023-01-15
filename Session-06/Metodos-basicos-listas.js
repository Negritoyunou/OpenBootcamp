/////// Listas

let array1 = ["warchi",12,3.4,true,"la mama de archi"]
let auto = "lamborghini"
array1.push(auto)
console.log(array1)
let hermana = "Archi"
array1.unshift(hermana)
console.log(array1)
console.log(array1.length)
let medio = 99
array1[4] = medio 
console.log(array1)


// METODO DE BORRADO AL FINAL .pop
array1.pop()
console.log(array1)

// METODO DE BORRADO AL INICIO .shift
array1.shift()
console.log(array1)

// METODO DE BORRADO CON LOCALIZACIÓN .splice (Primer valor indica indice,posicion, segundo valor la cantidad a borrar)
const array2 = [1,2,3,4,5,6]
array2.splice(1,2)
console.log(array2)
array2.splice(3,1, "warchiwar")
console.log(array2)





