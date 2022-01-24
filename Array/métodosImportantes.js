const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
console.log(pilotos)

pilotos.pop() // remove o último elemento
console.log(pilotos)

pilotos.push('Verstaphen')
console.log(pilotos)

pilotos.shift() // Remove o primeiro elemento
console.log(pilotos)

pilotos.unshift('Hamilton')
console.log(pilotos)

const algunsPilotos = pilotos.slice(2)
// Cria um novo array com os dois últimos
console.log(algunsPilotos)

