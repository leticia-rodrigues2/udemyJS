// EXERCÍCIO ACHAR O MAIOR VALOR
// aula 33
// DUAS FORMAS DE CRIAR A MESMA FUNÇÃO
 
const max2 = (x,y) => x > y ? x :y;
console.log(max2(5,2));
 
function max(x,y){
   if(x > y){
       return x;
   }
   else {
       return y;
   }
}
const maior = max (10,20);
console.log(maior);