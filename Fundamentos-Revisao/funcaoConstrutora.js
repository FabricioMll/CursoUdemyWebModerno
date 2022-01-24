function Carro(velMáxima = 200, delta = 5) {
    let velAtual = 0

    this.acelerar = function () {
        if (velAtual + delta <= velMáxima) {
            velAtual += delta
        } else {
            velAtual = velMáxima
        }
    }

    this.getVelAtual = function () {
        return velAtual
    }
}

const uno = new Carro
uno.acelerar()
console.log(uno.getVelAtual())

const ferrari = new Carro(350, 20)
ferrari.acelerar()
console.log(ferrari.getVelAtual())