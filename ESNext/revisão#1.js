// let e const
{
    var a = 2 // Visível globalmente
    let b = 3 // Visível apenas neste escopo
    console.log(b) // Se colocar fora das {} ele fica 'undefined'
}
console.log(a)

// Template String

// Destructuring
const [l, e, ...tras] = "Cod3r"
console.log(l, e, tras)

const [x, , y] = [1, 2, 3]
console.log(x, y)

const { idade: i, nome } = { nome: 'Ana', idade: 33}
console.log(nome, i, 'anos')
// Uma lista de atributos precisa estar entre {}
// Coloca a variavel chave se não tiver a variável valor
// Se tiver variavel valor, esta é que deve ser usada