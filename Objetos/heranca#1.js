const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}

console.log(ferrari.__proto__) 
/* O atributo '__proto__' aponta para o prototype
do objeto 'Ferrari'. É um método moderno também aceito, porém 
pode dar problemas em browsers mais antigos*/
console.log(ferrari.__proto__ === Object.prototype)
console.log(ferrari.prototype)