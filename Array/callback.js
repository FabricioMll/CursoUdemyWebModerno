Array.prototype.forEach2 = function(callback) {
    for (let i = 0; i<this.length; i++)
    callback(this[i], i, this)
}

const aprovados2 = ['Aghata', 'Aldo', 'Daniel', 'Raquel']

aprovados2.forEach2(function(nome, indice) {
    console.log(`${indice+1}) ${nome}`)
})