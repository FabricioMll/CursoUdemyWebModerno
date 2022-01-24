function compras(trab1, trab2) {
    const comprSorvete = trab1 || trab2
    const comprTV50 = trab1 && trab2
    const comprTV32 = trab1 != trab2 // Outra forma seria !!(trab1 ^ trab2)
    const manterSaudavel = !comprSorvete // Unário

    return { comprSorvete, comprTV50, comprTV32, manterSaudavel } // Objeto cuja chave é igual ao valor
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))
console.log('')

const resultado = nota => nota >=7? 'Aprovado': 'Reprovado' // Ternário

console.log(resultado(7.9))
console.log(resultado(6.5))