//FOR IN
// aula 28

const pessoa = {
    nome :'Luiz',
    sobrenome : 'Otavio',
    idade : 30
};
for(let chave in pessoa){
    console.log(chave , pessoa[chave]);
}
console.log();
console.log(`**************************`);
console.log();

const frutas = ['Pêra', 'Maça', 'Uva'];

for (let i in frutas){
    console.log(frutas[i]);
}
