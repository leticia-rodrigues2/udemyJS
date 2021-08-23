//FOR OF
// For clássico - (array ou string)
// For in -(string,array ou obejeto)
//For of - (interáveis, arrays ou strings)
//aula 29

const nomes = ['Leticia Rodrigues'];

for(let i = 0; i< nomes.length; i++){
    console.log(nomes);

}
console.log('########');

for(let i in nomes){
    console.log(nomes[i]);
}
console.log('##########');

for(let valor of nomes){
    console.log(valor);
}