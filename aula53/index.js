// retorne numeros maior que 10
//Filter - Filtrando o array
const numeros =[5,50,80,1,23,5,8,7,11,15,22,27];
const numerosFiltrados = numeros.filter(valor => valor >10);
console.log(numerosFiltrados);

// nomes com mais de 5 letras
// PESSOAS COM IDADE MAIR QUE 50
// pessoas que tem o nome que termina com 'a'
const pessoas = [
    {nome :'Luiz', idade : 15},
    {nome :'Maria', idade : 62},
    {nome :'Eduardo', idade : 58},
    {nome :'Leticia', idade : 20},
    {nome :'Rosana', idade : 35},
    {nome :'Theo', idade : 2},
]

const pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length >= 5);
console.log(pessoasComNomeGrande);


const pessoasComIdadeMaiorCinquenta = pessoas.filter(obj => obj.idade > 50);
console.log( pessoasComIdadeMaiorCinquenta);


const nomeTerminaCoaA = pessoas.filter(obj => {
    return obj.nome.toLowerCase().endsWith('a');
});
console.log( nomeTerminaCoaA );