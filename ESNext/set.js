// Não aceita repetição e não é indexado
const times = new Set()
times.add('Vasco')
times.add('São Paulo').add('Palmeiras').add('Corintias')
times.add('Vasco') // Não vai adicionar pq não aceita repetição
times.add('Flamengo')

console.log(times)

// Possui funções has, siza, delete, etc