class DispositivoEletronico{
    constructor(nome){
        this.nome = nome;
        this.ligado = false;
    }

    ligar(){
    if(this.ligado){
    console.log(`${this.nome} já está ligado`);
    return;
}
this.ligado = true;
    }

    desligar(){
if(!this.ligado){
    console.log(`${this.nome} já desligado`);
    return;
}
this.ligado = false;
    }
}

const d1 = new DispositivoEletronico('telefone');
//d1.ligar();
//d1.desligar();
//d1.desligar();
//console.log(d1);

class Smartphone extends DispositivoEletronico{
    constructor(nome, cor, modelo){
        super(nome);
        this.cor = cor;
        this.modelo = modelo;
    }
}

class Processador extends Smartphone{
    constructor(nome, geracao, cor, modelo){
        super(nome, cor, modelo);
        
        this.geracao = geracao;
        
        
        
    }
}
const s1 = new Smartphone('Iphone', 'preto', '16PROMAX');

console.log(s1);
const p1 = new Processador('i5', 'Geração 10', 'Azul', 'modelo 5');
p1.ligar();
console.log(p1)
