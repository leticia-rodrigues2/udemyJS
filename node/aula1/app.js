const path = require('path');
const mod1 = require ('./mod1');
console.log(mod1.falaNome());

const sobrenome = mod1.sobrenome;
console.log(sobrenome)

const nome = require ('./mod1').nome;
console.log(nome);

const {nomeDestruction , sobrenomeD , falaNomeDestruction } = require ('./mod2')
console.log(nomeDestruction,sobrenomeD);
console.log(falaNomeDestruction());
