const pessoas = [
    { id: 3, nome: 'Luiz'},
    { id: 2, nome: 'Leticia'},
    { id: 1, nome: 'Helton'},
];

const novasPessoas = {};
for (const pessoa of pessoas){
    const {id} = pessoa;
    novasPessoas[id] = {...pessoa};
}
console.log(novasPessoas);
console.log(`********** USANDO MAP ORDEM DECRESCENTE ********`);
const novasPessoas2 = new Map();
for(const pessoa of pessoas){
    const{id}= pessoa;
    novasPessoas2.set(id,{...pessoa});
}
novasPessoas2.delete(1);// excluir um 
console.log(novasPessoas2);
console.log(novasPessoas2.get(2));