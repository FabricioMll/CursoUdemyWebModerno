function novoElemento(tagName, className) {
    const elem = document.createElement(tagName)
    elem.className = className

    return elem
}

function Barreira(reversa = false) {
    this.elemento = novoElemento('div', 'barreira')

    const borda = novoElemento('div', 'borda')
    const corpo = novoElemento('div', 'corpo')
    this.elemento.appendChild(reversa ? corpo : borda)
    this.elemento.appendChild(reversa ? borda : corpo)
    this.setAltura = altura => corpo.style.height = `${altura}px`
}


// const b = new Barreira(true)
// b.setAltura(300)
// document.querySelector('[wm-flappy').appendChild(b.elemento)

function ParDeBarreiras(altura, abertura, x) {
    
    this.elemento = novoElemento('div', 'parBarreiras')

    this.superior = new Barreira(true)
    this.inferior = new Barreira(false)

    this.elemento.appendChild(this.superior.elemento)
    this.elemento.appendChild(this.inferior.elemento)

    this.randAbertura = () => {
        const alturaSup = Math.random() * (altura - abertura)
        const alturaInf = altura - abertura - alturaSup
        this.superior.setAltura(alturaSup)
        this.inferior.setAltura(alturaInf)
    }

    this.getX = () => parseInt(this.elemento.style.left.split('px')[0])
    this.setX = x => this.elemento.style.left = `${x}px`
    this.getLargura = () => this.elemento.clientWidth

    this.randAbertura()
    this.setX(x)
}

// const b = new ParDeBarreiras(600, 250, 400)
// document.querySelector('[wm-flappy]').appendChild(b.elemento)



var deslocamento = 2

deslocamento = setInterval(() => {
    deslocamento++
}, 5000);

function Barreiras(altura, largura, abertura, espaco, notificarPonto) {
    this.pares = [
        new ParDeBarreiras(altura, abertura, largura),
        new ParDeBarreiras(altura, abertura, largura + espaco),
        new ParDeBarreiras(altura, abertura, largura + espaco * 2),
        new ParDeBarreiras(altura, abertura, largura + espaco * 3)
    ]

    

    this.animar = () => {

      

        this.pares.forEach(par => {
            par.setX(par.getX() - deslocamento)
            if (par.getX()+250 < par.getLargura()) {
                par.setX(par.getX() + espaco * this.pares.length) 
                par.randAbertura()
            }

            const meio = largura / 2
            const cruzouMeio = par.getX() + deslocamento >= meio && par.getX() < meio
            cruzouMeio && notificarPonto()
        })
    }
}

function Passaro(alturaJogo) {
    let voando = false

    this.elemento = novoElemento('img', 'passaro')
    this.elemento.src = 'imgs/passaro.png'

    this.getY = () => parseInt(this.elemento.style.bottom.split('px')[0])
    this.setY = y => this.elemento.style.bottom = `${y}px`

    window.onkeydown = e => voando = true
    window.onkeyup = e => voando = false

    this.animar = () => {
        const novoY = this.getY() + (voando ? 6 : -4)
        const alturaMaxima = alturaJogo - this.elemento.clientHeight

        if (novoY <= 0) {
            this.setY(0)
        } else if (novoY > alturaMaxima) {
            this.setY(alturaMaxima)
        } else {
            this.setY(novoY)
        }
    }
    this.setY(alturaJogo /2)
}

function Progresso() {
    this.elemento = novoElemento('span', 'progresso')
    this.atualizarPontos = pontos => {
        this.elemento.innerHTML = pontos
    }
    this.atualizarPontos(0)
}

// const passaro = new Passaro(550)
// const barreiras = new Barreiras(550, 1200, 200, 400)
// const areaDoJogo = document.querySelector('[wm-flappy]')

// barreiras.pares.forEach(par => areaDoJogo.appendChild(par.elemento))
// areaDoJogo.appendChild(passaro.elemento)

// setInterval(() => {
//     barreiras.animar()
//     passaro.animar()
// }, 20)

function sobrepostos(elemA, elemB) {
    const a = elemA.getBoundingClientRect()
    const b = elemB.getBoundingClientRect()

    const horizontal = a.left + a.width >= b.left 
    && b.left + b.width >= a.left
    const vertical = a.top + a.height >= b.top 
    && b.top + b.height >= a.top

    return horizontal && vertical
}

function colidiu(passaro, barreiras) {
    let colidiu = false 
    barreiras.pares.forEach(ParDeBarreiras => {
        if (!colidiu) {
            const superior = ParDeBarreiras.superior.elemento
            const inferior = ParDeBarreiras.inferior.elemento
            colidiu = sobrepostos(passaro.elemento, superior) 
            || sobrepostos(passaro.elemento, inferior)
        }
    })

    return colidiu
}

function FlappyBird() {
    let pontos = 0

    const areaDoJogo = document.querySelector('[wm-flappy]')
    const altura = areaDoJogo.clientHeight
    const largura = areaDoJogo.clientWidth

    const progresso = new Progresso()
    const barreiras = new Barreiras(altura, largura, 
        250, 400, () => 
        progresso.atualizarPontos(++pontos))
    const passaro = new Passaro(altura)

    areaDoJogo.appendChild(progresso.elemento)
    areaDoJogo.appendChild(passaro.elemento)
    barreiras.pares.forEach(par => areaDoJogo.appendChild(par.elemento))

    const start = document.querySelector('.start')
    start.onclick = function() {
    const temporizador = setInterval(() => {
        barreiras.animar()
        passaro.animar()

        if (colidiu(passaro, barreiras)) {
            clearInterval(temporizador)
        }
    }, 20)
}

   // this.start = () => {
        // const temporizador = setInterval(() => {
        //     barreiras.animar()
        //     passaro.animar()

        //     if (colidiu(passaro, barreiras)) {
        //         clearInterval(temporizador)
        //     }
        // }, 20)
  //  }
}

new FlappyBird() 



