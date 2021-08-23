// Tratando e lançando erros (try, catch,throw)
// aula 35
function soma (x,y){
    if(
        typeof x !== 'number' ||
        typeof y !== 'number'
    ){
        throw new Error('x e y precisa ser numero');

    }
    return x+y;
}

try{
    console.log(soma(1,2));
    console.log(soma('1',2));
}catch(error){
    console.log(error);
    console.log('Aguarde algo de inesperado aconteceu')
}