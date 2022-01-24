const tecnologias = new Map()
tecnologias.set('react', { framework: false })
tecnologias.set('react', { framework: true })

console.log(tecnologias.framework)
console.log(tecnologias.get('react').framework)

const chavesVariadas = new Map([
    [function () { }, 'Função'],
    [{}, 'Objeto'],
    [123, 'Número']
])

chavesVariadas.forEach((vl, ch) => {
    console.log(ch, vl)
})

console.log(chavesVariadas.has(123))
console.log(chavesVariadas.size) // Indica o tamanho