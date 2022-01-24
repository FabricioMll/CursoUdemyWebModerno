const aprovados = ['Aghata', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach(function(nome, indice) {
    console.log(`${indice+1}) ${nome}`)
})
// O primeiro parâmetro é sempre o nome, 
//o segundo é sempre o indice e 
//o terceiro é o próprio array

aprovados.forEach((nome, indice) => console.log(indice+1,')',nome))

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)
