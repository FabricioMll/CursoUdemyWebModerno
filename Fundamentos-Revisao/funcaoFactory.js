function criarProduto(produto, preco) {

    return {
        Produto: produto,
        Preço: preco
    } // O 'retorno' vai construir um banco de dados
}

console.log(criarProduto('mesa', 300))
console.log(criarProduto('cadeira', 200))
console.log(criarProduto('laptop', 3500))