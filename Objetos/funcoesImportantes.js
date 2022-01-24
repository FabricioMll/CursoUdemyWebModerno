const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]}: ${e[1]}`)
})

//Ou...
Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, "dataNascimento", {
    enumerable: true,
    writable: false,
    value: '10/10/2010'
})

pessoa.dataNascimento = '10/02/2012'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

//Object.assign (ECMAScript 2015)
const dest = { a: 1}
const o1 = { b: 2 }
const o2 = { c: 3 }
const obj = Object.assign(dest, o1, o2)
console.log(obj)