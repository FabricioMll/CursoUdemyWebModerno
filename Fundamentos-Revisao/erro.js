function tratarErro(erro) {
     throw new Error('...seu código tem um erro...')
    // throw 10
    // throw true
    /*throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }*/
}

function imprimirCaixaAlta(obj) {
    try {
    console.log(obj.name.toUpperCase() + "!!!")
    } catch (e) {
        tratarErro(e)
    } finally {
       console.log('final')
    }
}

const obj = { nome: 'Fabrício'}

imprimirCaixaAlta(obj)