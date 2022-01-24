//1
const fabricantes = ['Mercedes', 'Audi', 'BMW']

function imprima(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprima)

//2
const notas = [3.4, 5.6, 8.7, 4.5, 6.5, 7.8]
let notasBaixas = notas.filter(function (nota) {
    return nota < 7
}) // Não precisa usar loop 'for'

console.log(notasBaixas)

//3
const notamenor = nota => nota < 7
const notasBaixasII = notas.filter(notamenor)
console.log(notasBaixasII)