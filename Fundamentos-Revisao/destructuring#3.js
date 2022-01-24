function rand({ min = 0, max = 1000 }) { // Operador 'destructuring'
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
const obj = { max: 50, min: 40 } // Objeto que será passado por parâmetro
console.log(rand(obj)) 
console.log(rand({ min: 990 }))
console.log('Objeto vazio:', rand({})) // É possível passar objeto vazio como parâmetro
