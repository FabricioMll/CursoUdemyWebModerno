let a = 3

global.b = 4
this.c = false
this.d = 'teste'
console.log(this.a)
console.log(global.b)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this)
console.log(module.exports)

// Criando variável maluca: sem var ou let!!
// JAMAIS fazer isso!!! Sérios riscos de bugs no sistema
abc = 123
console.log(global.abc)