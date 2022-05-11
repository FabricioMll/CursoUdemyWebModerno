const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const saudacao = require('./saudacaoMid')
const usuarioApi = require('./api/usuario')
require('./api/produto')(app, 'com param!')

app.post('/usuario', usuarioApi.salvar)
app.get('/usuario', usuarioApi.obter)



app.use(bodyParser.text())
app.use(bodyParser.json())
app.use(saudacao('Fabrício'))

app.get('/clientes/relatorio', (req, res) => {
    res.send(`Cliente relatório: completo ${req.query.completo} ano = ${req.query.ano}`)
})

app.post('/corpo', (req, res) => {
    // let corpo = ''
    // req.on('data', function(parte) {
    //     corpo += parte
    // })

    // req.on('end', function() {
    //     res.send(corpo)
    // })
    res.send(JSON.stringify(req.body))
})

app.get('/clientes/:id', (req, res) => { // o ':id' é algo que pode ser mudada na url
    res.send(`Cliente ${req.params.id} selecionado!`)
})

app.use('/opa', (req, res) => {
    res.send('Olá, <b>Estou</b> BEM!')
})
// O primeiro parametro de 'app.função()' será a url da função. Se estiver vazio, ela 
//vai ser chamada como raiz

// O metodo use aceita qualquer requisição.

app.listen(3000, () => {
    console.log('Backend executando...')
})