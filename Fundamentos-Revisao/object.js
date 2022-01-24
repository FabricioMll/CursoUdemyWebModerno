const objeto1 = {id: '1', nome: 'Fabrício', idade: '34', Profissão: 'Coder'};

console.log(objeto1);

const b = objeto1;

b.nome = 'godofredo';
console.log(b)
console.log(objeto1);

let num = 3;

function mudar(obj) {
    obj.Profissão = 'motorista'
    
}
    
function mudarNum(valor){
    valor++
    console.log(valor)
}
mudar(objeto1) // Mudará, pois o valor é um objeto
mudarNum(num); // Não mudará o valor pois tipos primitivos não são passados por referencia;
console.log(num);

console.log(objeto1)