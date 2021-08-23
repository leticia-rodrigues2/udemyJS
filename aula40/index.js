//Seção 4: JavaScript Funções (Avançado)
// FORMAS DE DECLARAR FUNÇÕES
// DECLARAÇÃO DE FUNÇÃO HOISTING
falaOi();
function falaOi(){
    console.log('Oie');
}

//FRIST-CLASS OBJECTS (Objeto primeira classe)
// Function expression

const souUmDado = function(){
    console.log('Sou dado .')
}
souUmDado();

//Arraw funcão (Function hoisting)

const funcaoArrow= ()=> {
    console.log('Sou uma arrow function');
};
funcaoArrow();

// Dentro de um objeto
const obj = {
    falar: function(){
        console.log('Estou falando ...')
    }
    
};
obj.falar();