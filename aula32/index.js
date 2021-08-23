    //  CONTINUE E BREAK
    // aula 32

const numeros = [1,2,3,4,6,7,8,9];

for(let n of numeros){
    if (n === 2){
        console.log('Pulei o número 2');
        continue;
    }

    console.log(n);

    if(n=== 7){
        console.log(' 7 encontrado, saindo ...')
        break;
    }
}