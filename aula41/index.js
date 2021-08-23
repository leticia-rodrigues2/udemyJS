//69. Parâmetros da função
// você não precisa declara o parâmetro para a função
// ou seja você entrega o valor para a função eu usa com (arguments)
// (arguments) = sustenta todos os argumentos enviado Arrow não funciona
function funcao(){
    let total =0 ;
    for(let argumento of arguments){
        total += argumento;
    }
    console.log(total);
 }
 funcao( 1,2,3,4,5,7,9,10);
  
 // para usa o valo passado por parâmetro em b é necessario usa o undefined , pois null
 // ou '' ele assumi essas formas ou usa 0
 function funcao2 ( a, b=2 ,c = 4){
    console.log(a + b + c);
 }
 funcao2( 2, undefined,20);
  
 //desestruturação
 function funcao3 ({nome ,sobrenome,idade}){
 console.log(nome,sobrenome,idade);
 }
 // let obj=  {nome : 'Leticia' ,sobrenome : 'Rodrigues', idade : 24}
 // funcao3(obj);
 //OU
 funcao3( {nome : 'Leticia' ,sobrenome : 'Rodrigues', idade : 24});
  
 function funcao4 ([valor1, valor2,valor3]){
    console.log(valor1, valor2,valor3);
   }
   função4( [ 'Leticia Rodrigues', 'Bento', 24])
  
  
 function conta (operador , acumulador , ... numeros){
    for(let numero of numeros){
        if(operador == '+')acumulador += numero;
        if(operador == '-')acumulador += numero;
        if(operador == '/')acumulador += numero;
        if(operador == '*')acumulador += numero;
   
    }
    console.log(acumulador);
 }
 conta( '+', 10, 20,30,40,50);
  
 // OUTRA FORMA DE VER OS ARGUMENTOS EM QUALQUER TIPO DE FUNÇÃO
 const conta2 = (...args) => {
   
    console.log(args);
 };
 conta2 ( '+', 10, 20,30,40,50);
  
  
 