// Prototype chain
const avo = { attr1: 'A' }
const pai = { __proto__: avo, attr2: 'B' }
const filho = { __proto__: pai, attr3: 'C' }

console.log(filho.attr1) 
/* Ele busca nos objetos ascendentes até
encontrar o atributo chamado. Se não
encontrar em nenhum, ele retorna 'Undefined'*/

const carro = {
    velAtual: 0,
    velMax: 200,
    acelelarMais(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 // Shadowing
}

const volvo = {
    modelo: 'V40',
    velAtual: 50,
    status() {
        return `${this.modelo}: ${super.status()}`
        // O 'super' invoca o atributo do objeto ascendente
    }
}

Object.setPrototypeOf(ferrari, carro) // 'carro' se torna protótipo de 'ferrari'
Object.setPrototypeOf(volvo, carro) 

console.log(ferrari)
console.log(volvo.status())

volvo.acelelarMais(100)
console.log(volvo.status())
