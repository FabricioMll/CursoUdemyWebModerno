function funcionaOuNao(valor, chanceErro) {
    return new Promise((resolve, reject) => {
        if (Math.random() < chanceErro) {
            reject('Ocorreu um erro')
        } else {
            resolve(valor)
        }
    })
}
funcionaOuNao('Testando...', 0.4) 
.then(v => console.log(`Valor: ${v}`))
.catch(err => console.log(`ERRO: ${err}`))
.then(() => console.log('Fim!'))