import { readFile } from 'fs'
import { join } from 'path'

function lerArquivo(caminho) {
    return new Promise(resolve => {
        readFile(caminho, function(_, conteudo) {
            resolve(conteudo.toString())
            console.log('Depois de ler')
        })
    })
}

const caminho = join(__dirname, 'arquivoTexto.txt')

lerArquivo(caminho)
.then(conteudo => conteudo.split('\n'))
.then(linhas => linhas.join(', '))
.then(console.log)