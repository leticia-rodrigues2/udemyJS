
// ATRIBUIÇÃO VIA DESESTRUTURAÇÃO
//aula 25
const pessoa = {
    nome :'Luiz',
    sobrenome: 'Miranda',
    idade:30,
    endereco :{
      //  rua : 'Av . Brasil',
        numero:320
    }
};

const {
    endereco: {rua : r = 12345 , numero},
    endereco
}= pessoa;
console.log(r,numero,endereco);

// const{ nome = '' , sobrenome} = pessoa;
// console.log(nome,sobrenome);