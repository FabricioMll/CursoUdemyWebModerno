//1
moeda = (valor) => {
    let formatado = valor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
    console.log(formatado)
}

moeda(0.30000000000000004)

//2
simples = (valorAplicado, taxa, tempo) => {
    let juros = valorAplicado * taxa * tempo
    let montante = juros + valorAplicado
    let result = montante.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
    return result
}

console.log('simples: ', simples(3000, 0.2, 6))

compostos = (valorAplicado, taxa, tempo) => {
    let juros = valorAplicado * (Math.pow(1 + taxa, tempo))
    let montante = juros + valorAplicado
    let result = montante.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
    return result
}

console.log('Compostos: ', compostos(3000, 0.2, 6))

//3 
function baskara(a, b, c) {
    let bNeg = b * -1
    let divisor = a*2
    let ac4 = 4*a*c
    let delta = b*b - ac4
    
    if (delta > 0) {
            let raizDelta = Math.sqrt(delta)
            let denominador1 = bNeg + raizDelta 
            let denominador2 = bNeg - raizDelta
            let xl = denominador1/divisor
            let xll = denominador2/divisor
              
            return {
                x1: `${xl.toFixed(2)}`,
                x2: `${xll.toFixed(2)}`
            }
    } else {
            return 'Delta negativo'
       }
}

console.log(baskara(-2, 4, 2))

//4 - quantos recordes batidos, qual o pior jogo
const pontuacao = {
    primeiro: 6.7,
    segundo:  4.5,
    terceiro: 7.0,
    quarto: 8.7,
    quinto: 6.5,
    sexto: 9.0
}

function maiorPonto(pontuacao) {
    let maior = pontuacao.primeiro
    let menor = 10
    let piorJogo = 0
    let recorde = 0
    for (let i in pontuacao) {
        if (maior < pontuacao[i]) {
            maior = pontuacao[i]
            recorde++
        }
        if (menor > pontuacao[i]){
            menor = pontuacao[i]
            piorJogo++
        }
        var result = [recorde, piorJogo]
    }
    console.log(result)
}

maiorPonto(pontuacao)

//5 - Alunos com nota 40+ são aprovados
function arredondamento(nota) {
    let res = nota%5
    let result = nota
    
    if (res>=3) {
        let arred = 5-res
        result = nota + arred 

        return result
    }
    return result
}



const notaAluno = [34.56, 45.65, 23.43, 56.76, 54.25]

for (let i in notaAluno) {
    arredondamento(notaAluno[i])>=40 ? console.log('Aprovado', notaAluno[i]) : console.log('Reprovado', notaAluno[i])
}

//6
por3 = (num) => {
    return num%3==0
}
 
console.log(por3(6))

//7
anoBisexto = (ano) => {
     if (ano%400==0 ^ ano%100==0 ^ ano%4==0) {
         return true
     } else {
         return false
     }
}

console.log(anoBisexto(2000))

//8
fatorial = (num) => {
    let param = num
    let valor = 1
    for (let i=0; i<param; i++) {
        valor*=num
        --num
    }
    console.log(valor)
}

fatorial(6)

//8
let data = new Date
let diaSem = data.getDay()

switch (diaSem) {
    case 0:
        console.log('domingo.')
        break
    case 1: 
        console.log('segunda-feira.')
        break
    case 2: 
        console.log('terça-feira.')
        break
    case 3: 
        console.log('quarta-feira.')
        break
    case 4: 
        console.log('quinta-feira.')
        break
    case 5: 
        console.log('sexta-feira.')
        break
    case 6: 
       console.log('sábado.')
       break
    default:
       console.log('[ERRO]-Dia Inválido')
       break
}

//9
fruteira = (numero) => {
    switch(numero) {
        case 1:
            console.log('Não vendemos esta fruta aqui')
            break
        case 2:
            console.log('Estamos com escassez de kiwi')
            break
        case 3:
            console.log('Aqui está, custa só $500 dinheiros')
            break
        default:
            console.log('[Erro]: nome inválido')
    }

}

nomeParaNumero = (fruta) => {
    let numero
    if (fruta=='MAÇÃ'){
        numero = 1
    } else if (fruta=='KIWI' || fruta == 'KIVI' || fruta ==  'QUIVI' || fruta ==  'QUIWI' || fruta ==  'QUIUI' || fruta ==  'KIUI') {
        numero = 2
    } else if (fruta == 'MELANCIA') {
        numero = 3
    } else {
        numero = 4
    }

    return numero
}

fruteira(nomeParaNumero(' quiui'.toUpperCase().trim()))

//10
letrasRepetidas = (str1, str2) => {
    for (let i in str1) {
        if (str1[i] != ' ') {
        for (let j in str2){
            if (str2[j] == str1[i]){
                console.log(`Letra ${str2[j]} aparece nas duas strings`)
            }
        }
        }
    }
    //str1 === str2 ? console.log(true): console.log(false)
}
let primStr = 'bom dia'
let segStr =  'sabão de camomila'
letrasRepetidas(primStr.toUpperCase().trim(), segStr.toUpperCase().trim())

