const fs = require('fs')

const caminho = __dirname + '/arquivo.json'



//sincrono...
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(1)
console.log(conteudo)

// Assincrono
fs.readFile(caminho, 'utf-8', (err, conteudo) =>{
    const config = JSON.parse(conteudo) // Transforma para json
    console.log(2)
    console.log(`${config.db.host}:${config.db.port}`)
})

const config = require('./arquivo.json')
console.log(3)
console.log(config.db) // Vai executar antes do anterior

// Leitura de pasta (diretórios)

fs.readdir(__dirname, (err, arquivos) => {
    console.log(4)
    console.log('Conteúdo da pasta...')
    console.log(arquivos)
})