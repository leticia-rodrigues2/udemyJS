class Pessoa {
    constructor(nome , sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome ;
    }
    fala(){
        console.log( `${this.nome} esta falando`);
    }
}

function Pessoa2 (nome , sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome ;
    }

    Pessoa2.prototype.falafala = function(){
        console.log( `${this.nome} esta falando`);
    }

const p1 = new Pessoa ('Leticia1','Rodrigues P1');
const p2 = new Pessoa ('Leticia2','Rodrigues P2');
const p3 = new Pessoa ('Leticia 3','Rodrigues P3');
const p4 = new Pessoa ('Leticia 4','Rodrigues P4');

console.log(p1);
console.log(p2);
console.log(p3);
console.log(p4);
console.log(p4.fala());