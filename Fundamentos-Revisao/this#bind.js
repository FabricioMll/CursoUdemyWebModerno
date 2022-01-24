const pessoa = {
    saudacao: 'bom dia',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar() 

const falar = pessoa.falar
falar() // Vai dar 'undefined' devido ao conflito entre paradigmas

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()
