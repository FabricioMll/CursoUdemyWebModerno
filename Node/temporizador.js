const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('*/5 * * * * * ', function () {
    console.log('Executando Tarefa 1!', new Date().getSeconds())
})

setTimeout(function () {
    tarefa1.cancel()
    console.log('Cancelando Tarefa 1!')
}, 20000)

// setImmediate() - o mesmo que setTimeOut com o intervalo zerado
// setInterval() - executa a cada período especificado no intervalo
// O 'node-schedule' permite uma grande flexibilização na definição do momento em que a tarefa será executada

const regra = new schedule.RecurrenceRule() 
regra.dayOfWeek = [new schedule.Range(1, 5)]
regra.hour = 16
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra, function () {
    console.log('Executando Tarefa2', new Date().getSeconds())
})