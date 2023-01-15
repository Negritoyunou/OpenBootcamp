const listaCompra = [ "Agua", "Pan", "Jamon", "Arroz", "Carne", "Caldo"]
listaCompra.push("Aceite de Girasol")
console.log(listaCompra)
listaCompra.pop();
console.log(listaCompra)

/////////

const peliculas = [
    { titulo: "Rapido y Furioso", director: "Rob", fecha: 2001},
    { titulo: "Juegos del hambre", director: "Gary", fecha: 2012},
    { titulo: "Volver al futuro", director: "Robert", fecha: 1985}
]

peliculas2010 = peliculas.filter(p => p.fecha>2010)
console.log(peliculas2010)

directores = peliculas.map(nom => nom.director)
console.log(directores)

titulos = peliculas.map(p => p.titulo)
console.log(titulos)

const directores_titulos = titulos.concat(directores)
console.log(directores_titulos)

const directores_titulos2 =  [...titulos, ...directores]
console.log(directores_titulos2)
