// Imediately Invoked Function Expression

(function() {
    console.log('Será executada na hora e')
    console.log('Foge do escopo mais abrangente')
})()

/* Tudo o que estiver dentro dela,
inclusive as 'var', estarão restritas 
ao seu contexto léxico
*/