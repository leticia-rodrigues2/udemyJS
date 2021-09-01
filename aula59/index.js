
// defineProperty -> Getter e Setters
function Produto (nome,preco,estoque){
    this.nome = nome;
    this.preco = preco;
    let estoquePrivado = estoque;

    Object.defineProperty(this,'estoque',{
    enumerable :true, //mostrar a chave
    configurable: true ,// configuravel
    get : function () {
        return estoquePrivado;
    },
    set : function (valor){
        if(typeof valor !== 'number'){
            throw new TypeError('Somente numeros');
        }

        estoquePrivado= valor;
    }
});
}
function criarProduto (nome){
    return{
        get nome (){
            return nome;
        },
        set nome(valor){
            valor = valor.replace('coisa.','');
            nome =valor;
        }
    };
}
const p2 = criarProduto('Short');
p2.nome='Qualquer coisa.';
console.log(p2.nome);
const p1 = new Produto ('Camiseta', 20,3);
console.log(p1);
//p1.estoque ='O valor que eu quero';
p1.estoque =5555;
console.log(p1.estoque);
