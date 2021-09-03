function Pessoa (nome,sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome ;
    this.nomeCompleto = () => this.nome + 'ORIGINAL' + this.sobrenome;

}

//Pessoa.prototype.estouAqui = 'HAHAHAHAHA';

// Pessoa.prototype === pessoa1._proto_


Pessoa.prototype.nomeCompleto = function () {
    return this.nome + ' ' + this.nomeCompleto;
}

const pessoa1 = new Pessoa ('Luiz' ,'0.'); // <-- Pessoa = Função construtora
const pessoa2 = new Pessoa ('Maria' ,'0.'); // <-- Pessoa = Função construtora

const data = new Date(); // <-- Date = Função construtora

console.dir(pessoa1);
console.dir(data);