//1
const soma = function (x, y) {
    return x + y
}

console.log(soma(4, 5))

//2
const imprResultado = function (a, b, operacao = soma) {
    console.log(operacao(a, b))
}

imprResultado(3, 4)

//3
imprResultado(5, 3, function (x, y) {
    return x - y
})

//4
imprResultado(5, 6, (x, y) => x * y)

//5
const saudacao = {
    falar: function () { // Não é necessário escrever o 'function'
        console.log('Olá, mundo!')
    }
}

saudacao.falar()