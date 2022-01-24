function pessoa() {
    this.idade = 0

    const self = this // O self guarda o valor 'this' para este escopo
    setInterval(function() {
        self.idade++ // Colocando 'self' onde iria o 'this'
        console.log(self.idade)
    }/*.bind(this)*/, 1000) 
}

new pessoa