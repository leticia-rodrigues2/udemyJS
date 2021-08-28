//Map - Mapeando o array
//dobrar os numero
const numeros =[5,50,80,1,23,5,8,7,11,15,22,27];
const NumDobro = numeros.map(valor => valor*2);
console.log(NumDobro);

// retone para cada obj o nome da pessoa

const pessoas = [
    {nome :'Luiz', idade : 15},
    {nome :'Maria', idade : 62},
    {nome :'Eduardo', idade : 58},
    {nome :'Leticia', idade : 20},
    {nome :'Rosana', idade : 35},
    {nome :'Theo', idade : 2},
]
const nomes = pessoas.map(obj => obj.nome);
const idades = pessoas.map(obj => ({idade :obj.idade}));
const comIds = pessoas.map(function (obj ,indice){
    // não alterar o obj original
    const newObj ={...obj};
    newObj.id = (indice + 1) * 1000;
 return newObj;
});
console.log(pessoas);
console.log(nomes);
console.log(idades);
console.log(comIds);