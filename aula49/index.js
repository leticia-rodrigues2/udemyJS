//Funções geradoras
console.log(`********GERADOR 4************`);

function * geradora3 (){
    yield 0;
    yield 1;
    yield 2;
}
// return function(){
//     console.log('vim do return')
//para a execução }

function * geradora4 (){
    yield* geradora3();
    yield 3;
    yield 4 ;
    yield 5;
}

const g4 = geradora4();
for(let valor of g4){
    console.log(valor);
}

function * geradora2 (){
    let i =0;
    while(true){
        yield i ;
        i++;
    }
}

const g2 = geradora2();
console.log(`********GERADOR 2************`);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);


function* geradora1(){
    // codigo 
    yield 'Valor 1';
    // codigo 
    yield 'Valor 2';
    // codigo 
    yield 'Valor 3';

}
const g1 = geradora1();
console.log(`********GERADOR 1************`);
console.log(g1.next().value);

console.log(g1.next().value);

console.log(g1.next().value);

console.log(g1.next()) ;
