const saudacao = "Ola" // Contexto léxico 1

function exec() {
    const saudacao = "Hello" // Contexto léxico 2
    return saudacao // É possível usar o mesmo nome de variável pq são contextos léxicos diferentes
}                       // Não é possível vazer isso com 'var'

const cliente = { // Objetos são aninhados de par Chave/Valor
    nome: "Fabrício",
    idade: "34",
    Profissão: "coder",
    endereço: {
        Logradouro: 'rua dos Programadores',
        Numero: '110110100'
    }
}


console.log(saudacao)
console.log(exec())
console.log(cliente)
console.log(cliente.endereço)