//Object.preventExtensions - impede acrescentar atributos
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promocao'
})

console.log('Extensível:', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto)
// preventExtensions permite modificar e deletar, 
// mas não acrescentar

// Object.seal
const pessoa = { nome: 'Juliana', idade: 35 }
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa))
// O 'seal' sela o objeto e impede acrescentar e deletar atributos
// Permite alterar os valores
pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)

// Object.freeze = selado + valores constantes
const pessoa2 = { nome: 'Juliana', idade: 35 }
Object.freeze(pessoa2)
console.log('Congelado:', Object.isFrozen(pessoa2))
// Não permite alterar os valores
pessoa2.sobrenome = 'Silva'
delete pessoa2.nome
pessoa2.idade = 29
console.log(pessoa2)