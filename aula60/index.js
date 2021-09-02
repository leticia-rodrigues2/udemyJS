

// Relembrando
// Object.keys(retorna as chaves do array)
//Object.freeze(congela)
//Object.defineProperties (define varias propriedades)
//Object.defineProperty (define uma propriedade)



const produto = { nome : 'Produto', preco :1.8};
// const caneca ={ ...produto, meterial : 'porcelana'
// // copiar o vetor e adicionar
// };
// const prato = Object.assign({}, produto , {meteria: 'vidro' });
// const panela = { nome : produto.nome , preco:produto.preco};

Object.defineProperty (produto, 'nome',{

});
console.log(Object.getOwnPropertyDescriptor(produto));

// prato.nome ='Outro nnome prato copy'
// prato.preco = 2.5;
// caneca.nome ='Outro nnome caneca copy'
// caneca.preco = 2.5;
// console.log(produto);
// console.log(caneca);
// console.log(prato);

