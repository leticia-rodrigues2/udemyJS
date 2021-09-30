function rand (min, max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg , tempo){
    return new Promise((resolve,reject) => {
        if(typeof msg !== 'string') reject('BAD VALUE')
        setTimeout(() => {
            resolve(msg);
            },tempo);
    });
}

esperaAi('CONECTANDO com o BD', rand(1,3))
    .then(resposta => {
        console.log(resposta);
        return esperaAi('BUSCANDO dados na BASE' , rand (1,3));
    })

    .then(resposta => {
        console.log(resposta);
        return esperaAi(22222,'TRATANDO os dados na Base',rand (1,3));
    })
    .then(resposta => {
        console.log(resposta);
    })
    .then(resposta => {
        console.log('Euserei o ultimo a ser exibido.');
    })
    .catch();

    console.log('ISSO SERA EXECUTADO ANTES DA PROMISSE');