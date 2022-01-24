process.stdout.write('Informe o seu nome: ')
process.stdin.on('data', data => {
    const nome = data.toString().replace('\n', '')
    process.stdout.write(`Ola, ${nome}\n`)
    process.exit()
})