// aula 193
// Executar a tarefa e retornar todos os valores 
//somente depois que determinada função for cumprida

function gerarNumero(min, max, tempo) {
    if (min>max) [max, min] = [min, max]
    return new Promise(resolve => {
        setTimeout(function() {
            const fator = max - min + 1
            const aleatorio = parseInt(Math.random() * fator) + min
            resolve(aleatorio)
        }, tempo)
    })
}

function gerarVarios() {
    return Promise.all([
        gerarNumero(1, 50, 4000),
        gerarNumero(1, 50, 1000),
        gerarNumero(1, 50, 1000),
        gerarNumero(1, 50, 1000),
        gerarNumero(1, 50, 1000),
        gerarNumero(1, 50, 1000)
    ])
}

gerarVarios().then(console.log)