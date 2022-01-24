function rand ([min = 0, max = 1000]) { // destructuring
    if (min > max) [min, max] = [max, min] // Cria um array a partir do destructuring 
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand([50, 40]))
console.log(rand([990])) // Assume este valor como min e o max como o default
console.log(rand([, 20])) // Este será o valor max e assume o default como min
console.log(rand([])) // Fará o intervalo declarado no default