

// Retorno da função
//aula 41
function criarMultiplicador (multiplicador){
    return function(n){
        return n * multiplicador;
    };
 }
  
 const duplica = criarMultiplicador(2);
 const triplica = criarMultiplicador(3);
 const quadruplica = criarMultiplicador(4);
 console.log(duplica(2));
 console.log(triplica(2));
 console.log(quadruplica(2));
  
 function falaFrase (comeco){
    function falaResto(resto){
        return comeco + ' '  + resto ;
    }
    return falaResto;
 }
 const fala = falaFrase('Olá');
 const resto = fala('mundo !');
 console.log (resto);
 console.log(falaFrase);
  
 function criaPessoa (nome,sobrenome){
    return {nome,sobrenome};
 }
 const p1 = criaPessoa('Leticia','Rodrigues');
 const p2= {
    nome :'João',
    sobrenome :'Oliveira'
 };
 console.log(typeof p1);
 console.log(typeof p2);
  
 //FUNÇÃO QUE NÃO RETORNA VALOR  ELA FAZ ALGO
 // document.addEventListener('click' ,function(){
 //     document.body.style.backgroundColor = 'red';
 // });
 