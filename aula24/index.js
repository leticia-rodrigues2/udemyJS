//Atribuição via desestruturação (Arrays)
//aula 24
const numeros = [100,200,300,400,500,600,700,800,900,];
const [um , dois, tres,...resto]=numeros;
console.log(um, dois, tres);
console.log(resto);

//                   1       2          3
//               0  1  2    0 1 2    0  1 2
const numeros2 = [[1,2,3], [4,5,6], [7,8,9]];
const [lista1, lista2, lista3]= numeros2;
console.log([lista2[2]]);