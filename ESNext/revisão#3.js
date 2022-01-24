// ES8: Object.values/Object.entries
const obj = { a: 1, b: 2, c: 3 }
console.log(Object.values(obj)) // Somente valores
console.log(Object.entries(obj)) // Array de arrays

// Melhorias na Notação literal
const nome = 'Carla'
const pessoa = {
    nome, // Basta colocar a variável
    ola(){ // Declaração de funções ficou mais simples
        return 'Oi, gente'
    }
}

console.log(pessoa.nome, pessoa.ola())

// Class
class Animal {}
class Cachorro extends Animal {
    falar() {
        return 'Au au'
    }
}

console.log(new Cachorro().falar())