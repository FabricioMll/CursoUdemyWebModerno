// operador ... rest (juntar)/spread(espalhar)
// Usar rest com parâmetro de função

// Usar spread com objeto
const funcionario = { nome: 'Maria', salario: 1234.56 }
const clone = { ativo: true, ...funcionario }
console.log(clone)

// Usar spread com array
const grupoA = ['João', 'Pedro', 'Gloria']
const grupoB = ['Maria', 'Rafaela', ...grupoA]
console.log(grupoB)     