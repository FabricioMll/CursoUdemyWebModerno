for (let letra of "Cod3r") {
    console.log(letra)
} // Parecido com o 'for in'

const assuntos = ['Map', 'Set', 'Promise']
for (let i in assuntos) {
    console.log(i)
} // O 'for in' trabalha com base em índices

for (let a of assuntos) {
    console.log(a)
}

const assuntoMap = new Map([
    ['Map', { abordado: true }],
    ['Set', { abordado: true }],
    ['Promise', { abordado: false }]
])

for (let chave of assuntoMap.keys()) {
    console.log(chave)
}

for (let chave of assuntoMap.values()) {
    console.log(chave)
}

for (let [chave, valor] of assuntoMap.entries()) {
    console.log(chave, valor)
}

const s = new Set(['a', 'b', 'c'])

for (let letra of s) {
    console.log(letra)
}