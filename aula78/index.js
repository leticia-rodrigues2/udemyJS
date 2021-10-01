function rand (min, max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg , tempo){
    return new Promise((resolve,reject) => {
        if(typeof msg !== 'string') {
            reject('CAI NO ERRO');
            return;
        }
        setTimeout(() => {
            resolve(msg.toUpperCase()+ '-Passei na promise');
            },tempo);
    });
}

//Promise.all retorna todos em um array
//Promisse.race retorna o primeiro
//Promise.resolve executa o que foi pedido
//Promisse.reject executa os casos de erro como desejar

const promises = [
    'Primeiro valor',
    esperaAi('usando all promise 1',3000),
    esperaAi('usando all promise 2',500),
    esperaAi('usando all promise 3',1000),
  //  esperaAi(111111,1000), // CASO DE ERRO
    'Outro valor'
]

Promise.all(promises)
.then(function(valor){
    console.log(valor);
})
.catch(function(erro){
    console.log(erro);
});

const promises2 = [
    esperaAi('USANDO RACE promise 1',3000),
    esperaAi('USANDO RACE promise 2',5000),
    esperaAi('USANDO RACE promise 3',1000),
  //  esperaAi(111111,1000), // CASO DE ERRO
   
]

Promise.race(promises2)
.then(function(valor){
    console.log(valor);
})
.catch(function(erro){
    console.log(erro);
});

