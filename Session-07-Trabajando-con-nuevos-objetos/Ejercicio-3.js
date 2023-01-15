const fechaHoy = new Date()
console.log(fechaHoy)

const fechaNacimiento = new Date("July 1, 2004")
console.log(fechaNacimiento.toLocaleDateString())

console.log(fechaHoy.getTime()  === fechaNacimiento.getTime())

const dia = fechaNacimiento.getDate()
console.log(dia)

const mes = fechaNacimiento.getMonth()
console.log(mes + 1)

const año = fechaNacimiento.getFullYear()
console.log(año)
