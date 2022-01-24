const pai = { nome: 'Pedro', corCabelo: 'preto' }

const filha1 = Object.create(pai)
filha1.nome = 'Ana'
console.log(filha1.corCabelo) // Vai considerar o atributo do protótipo 'pai'
// 'preto'

const filha2 = Object.create(pai, {
    nome: { value: 'Bia', writeble: false, enumerable: true }
})

console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

for (let key in filha2) {
    filha2.hasOwnProperty(key) ? console.log(key) : console.log(`Por herança: ${key}`)
}