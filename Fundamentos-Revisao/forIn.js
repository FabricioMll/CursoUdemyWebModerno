const notas = [6.7, 4.5, 8.7, 5.6]

for (let i in notas) {
    console.log(i, notas[i])
}

const pessoas = {
    nome: 'Fabrício',
    sobrenome: 'Mello',
    idade: 34,
    peso: '95kg'
}

for (let atributo in pessoas) {
    console.log(`${atributo} = ${pessoas[atributo]}`)
}