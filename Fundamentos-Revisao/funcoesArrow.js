//1
let dobro = function (a) {
    return 2 * a
} // Função guardada em variável

console.log(dobro(4))

//2
dobroII = (a) => {
    return 2 * a
} // Estrutura arrow

console.log(dobroII(5)) 

//3
dobroIII = a => 2 * a // Arrow simplificada

console.log(dobroIII(6))

//4
let ola = function () {
    return 'Ola'
}

console.log(ola())

//5 
olaII = () => "OláII"

console.log(olaII())

//6
olaIII = _ => 'OláIII' // Tem parâmetro, mas pode ser ignorado

console.log(olaIII())