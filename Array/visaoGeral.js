let aprovados = ['Ana', 'Bia', 'Carlos']

console.log(aprovados)
console.log(aprovados[3])

aprovados[3] = 'Diego'

console.log(aprovados)

aprovados.push('Eduardo')

console.log(aprovados)

aprovados[9] = 'Rafael'

console.log(aprovados)
console.log(aprovados[7]) // Undefined

aprovados.sort() // Faz uma alteração inteligente na ordem dos elementos
console.log(aprovados)

delete aprovados[1]
console.log(aprovados)
aprovados.sort()
console.log(aprovados)

aprovados.splice(1, 2, 'Elemento1')
// Exclui e/ou adiciona elementos
console.log(aprovados)
