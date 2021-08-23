
// aula 13
function soma(x =1,y= 2){
    const resultado = x+y;
    return resultado;
}

const resultado = soma(4,2);
console.log(resultado);
console.log(soma()); // ELA USA OS VALORES COLOCADO NO PÁRAMETRO QUANDO NÃO É FORNECIDO OUTRO VALOR

// OUTRO TIPO DE FUNÇÃO ARROW
console.log('************************************************')
const raiz = n => n ** 0.5;
console.log("RAIZ :")
console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));

// function saudacao (nome){
//     return `Bom dia ${nome} !`;
// }

// const variavel = saudacao('Luiz');
// console.log(variavel);
