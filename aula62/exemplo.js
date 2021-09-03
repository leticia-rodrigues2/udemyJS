function Produto (nome,preco){
    this.nome = nome ;
    this.preco = preco;
}
Produto.prototype.desconto = function (percentual){
    this.preco = this.preco - (this.preco * (percentual /100));

};
Produto.prototype.aumento = function (percentual){
    this.preco = this.preco + (this.preco * (percentual /100));

};


const p1 = new Produto ('Camiseta',500);
//p1.desconto(10);
p1.aumento(20);


// literal 
const p2 ={
    nome: 'Caneca',
    preco: 15
};
Object.setPrototypeOf(p2, Produto.prototype);

p2.aumento(100);

const p3 = Object.create(Produto.prototype,{
    preco :{
        writable:true,
        configurable:true,
        enumerable : true,
        value: 113
    },

    Tamanho2:{
        writable:true,
        configurable:true,
        enumerable : true,
        value: 72
    }
})

p3.desconto(10);


console.log(p1);
console.log(p2);
console.log(p3);
