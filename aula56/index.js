// Retorne a soma do dobro de todos os valores
// -> Filtrar pares
// Dobrar valores
// -> Reduzir (soma tudo)

const numeros = [5,50,80,1,2,3,5,8,7,11,15,22,27];
const numerosPares = numeros
.filter (valor => valor % 2 ===0) //Filtrar pares
.map(valor => valor * 2) //dobro de todos os valores
.reduce((ac,valor) => ac + valor);// a soma do dobro de todos os valores

console.log(numerosPares);
