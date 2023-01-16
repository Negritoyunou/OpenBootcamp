function devolverTrue(){
    return true
}

const dt = devolverTrue()
console.log(dt)

/////

function saludar(nombre){
    console.log(`Hola, que tal ${nombre}`)
}

setTimeout(function(){
    saludar("Martin")
},500)

////

function* generator(){
    let id = 0;
    while(true){
        id++
        if (id === 20){
            return id
        }
        if(id %2 === 0){
            yield id
        }

    }

}

const gen = generator()

console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)