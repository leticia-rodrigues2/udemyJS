const nomes = ['Leticia', 'Joana', 'Maria', 'Gabriela','Felipe'];
// nomes.splace (indoce , delete , elem1 , elem2 , elem3)
//pop
console.log(nomes) ;
//const removidos = nomes.splice(3,2); // excluir o elemento 4 so uma posição Felipe
const removidos = nomes.splice(-2,2);
const add = nomes.splice(3,0, 'Luiz', 'Otavio');
console.log(nomes, removidos) ;

//shirt = remover o primeiro elemento
const removePrimeiroEl = nomes.splice(0,1);
console.log(removePrimeiroEl);

// push
nomes.splice(nomes.length,0,'gato','galatico','gabi')

// Unshift add no começo
nomes.splice(0,0,'galo','frago');
console.log(nomes);