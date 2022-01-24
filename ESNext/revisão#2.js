// Arrow Function
const soma = (a, b) => a + b
console.log(soma(3, 5))

// Arrow Function usando o 'this'
const lexico1 = () => console.log(this === exports)
const lexico2 = lexico1.bind({})

lexico1()// True, mas se fosse uma 
//Function tradicional, daria 'false' pois o this apontaria 
//para global
lexico2() // True, apesar do 'bind'. Nas funções 'arrow' 
//não é possível alterar o escopo do 'this'

// Parametro 'default'
function log(texto = 'Node') {
    console.log(texto)
}

log()
log("Parâmetros específicos são mais fortes do que o 'default'")

// Operador 'rest' (juntar)
function total(...numeros) {
    let total = 0
    numeros.forEach(n => total += n)
    return total
}
console.log(total(2, 3, 4, 5))