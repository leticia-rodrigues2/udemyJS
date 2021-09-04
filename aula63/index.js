function Produto (nome ,preco){
    this.nome = nome ;
    this.preco = preco ;
}

Produto.prototype.aumento = function (quantia){
    this.preco += quantia ;
};


Produto.prototype.desconto = function (quantia){
    this.preco -= quantia ;
};

function Camisa (nome , preco , cor){
    Produto.call(this , nome ,preco);
    this.cor = cor;
}
Camisa.prototype = Object.create(Produto.prototype);
Camisa.prototype.constuctor = Camisa;


function Bebiba (nome , preco ,cor, embalagem){
    Produto.call(this, nome,preco,cor,embalagem);
    this.cor = cor;
    this.embalagem = embalagem;

    Object.defineProperty(this, 'preco',{
        enumerable:true,
        configurable:false,
        get:function(){
            return preco;
        },
        set : function(valor){
            if (typeof valor !== 'number') return;
            preco = valor;
        }
    }
    );
}

Bebiba.prototype = Object.create(Produto.prototype);
Bebiba.prototype.constuctor = Bebiba;


const produto = new Produto ('Folha', 115);
const camisa = new Camisa('Reagat', 50 , 'preta');
const bebida = new Bebiba('Vinho', 500 , 'rosa', 'vidro');
console.log(produto);
console.log(camisa);
console.log(bebida);
