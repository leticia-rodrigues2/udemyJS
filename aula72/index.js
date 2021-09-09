class DispositivoEletronico {
    constructor(nome){
        this.nome = nome;
        this.ligado = false ;
    }

    ligar(){
        if(this.ligado){
            console.log(` ${this.nome} Já esta ligado`)
            return;
        }
        this.ligado = true;
    }

    desligar (){
        if(!this.ligado){
            console.log(this.nome + ' Já esta desligado');
            return;
        }
        this.ligado =false;
    }
}
class Samartphone extends DispositivoEletronico {
    constructor (nome, cor,modelo){
    super(nome);
    this.nome = cor;
    this.modelo = modelo;
    }
}

class Tablet extends DispositivoEletronico {
    constructor(nome,temWifi){
        super(nome);
        this.temWifi = temWifi;
    }

    ligar(){
        console.log('Olha, você alterou o metodo ligar.');
    }
}

const s1 = new Samartphone ('Samsung', 'Preto' , 'Galaxy S10');
console.log(s1);

const t1 = new Tablet ('iPad', true);
console.log(t1.ligado);