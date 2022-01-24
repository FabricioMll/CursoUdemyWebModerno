// Aula 156
const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')
// Aqui ele faz cache
const contadorC = require('./instanciaNova')()
const contadorD = require('./instanciaNova')()
//Aqui não faz cache porque são instancias novas
contadorA.inc()
contadorA.inc()

console.log(contadorA.valor, contadorB.valor)
//3 3, porque contadorB recebe o valor que está no cache
contadorC.inc()
contadorC.inc()
console.log(contadorC.valor, contadorD.valor)
//3 1, porque contadorD é instancia nova