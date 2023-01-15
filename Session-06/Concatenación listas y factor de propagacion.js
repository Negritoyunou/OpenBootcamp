// Como unir dos listas .concat(lista2)

const lista1 = ["hola", 3, false,  null]
const lista2 = ["chau", 7, true, undefined]

console.log(lista1.concat(lista2))
console.log(lista1)

const lista3 = lista1.concat(lista2)
console.log(lista3)

// Como unir dos listas con el factor de propagación
console.log(...lista3)

const lista4 = [...lista1, ...lista2]
console.log(lista4);

// ERROR!!! Mal entendido el concepto de propagación
const lista5 = [lista1, lista2]
console.log(lista5) 
