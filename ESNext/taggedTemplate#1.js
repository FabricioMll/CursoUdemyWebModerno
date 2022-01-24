// Tagged Template - processa o template dentro de uma função
// Poucas situações darão utilidade a isso

function tag(partes, ...valores) {
    console.log(partes, 'primeiro')
    console.log(valores, 'segundo')
    return 'Outra string'
}

const aluno = 'Gui' // valores
const situacao = 'Aprovado'
console.log(tag `${aluno} está ${situacao}`)
// As partes serão compostas pela template string