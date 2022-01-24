console.log(module.exports === this)
console.log(module.exports === exports)

this.a = 1
exports.b = 2
module.exports.c = 3

console.log(module.exports)
console.log('atualizando')
// Toda vez que quiser exportar objetos
//é necessário usar 'module.exports'
