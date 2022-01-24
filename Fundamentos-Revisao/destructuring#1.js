const pessoa = {
    nome: "Fabrício",
    idade: '34',
    endereço: {
        Logradouro: 'Rua dos Programadores',
        número: '11010101010'
    }
}

const { nome: n, idade: i } = pessoa
console.log(n, i)
console.log(pessoa)

const { sobrenome: sn, bemHumorada: bh = true } = pessoa
console.log(sn, bh)

const { endereço: { Logradouro, número, CEP }} = pessoa
console.log(Logradouro, número, CEP)