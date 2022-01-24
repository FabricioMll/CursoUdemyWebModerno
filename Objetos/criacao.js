// Notação literal
const obj1 = {}
console.log(obj1)

// Funções construtoras
function Produto(nome, preco, desc) {
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1-desc)
    }
}

const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('Notebook', 2999.99, 0.25)
console.log(p1.nome, p1.getPrecoComDesconto().toFixed(2), p2.nome, p2.getPrecoComDesconto().toFixed(2))

function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase/30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('Ana', 3450.45, 3)
const f2 = criarFuncionario('Rafael', 4500.34, 4)
console.log(f1.getSalario().toFixed(2), f2.getSalario().toFixed(2))

// Object.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

// Uma função famosa que retorna objeto
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON)