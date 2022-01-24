const filhas = ['Ana', 'Maria']
const filhos = ['João', 'Marcos']
const todos = filhas.concat(filhos, 'Mateus')

console.log(todos)

console.log([].concat([1, 2], [3, 4], 5, [[6, 7]]))
//O 'concat' une dois ou mais arrays e pode acrecentar novos elementos
