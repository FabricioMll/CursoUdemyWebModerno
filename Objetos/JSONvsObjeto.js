const obj = { a: 1, b: 2, c: 3, soma() { return obj.a+obj.b+obj.c } }
console.log(obj.soma())

console.log(JSON.stringify(obj))
// O 'JSON.stringify' converte o obj da notação literal
// para o formato JSON
// Ele exclui a função pq JSON é somente texto

console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3 }'))
// Somente é possível converter pq respeitou o formato JSON
// Sempre aspas duplas ""
console.log(JSON.parse('{ "a": 1, "b": "string", "c": true, "d": {}, "e": [] }'))
