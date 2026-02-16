function Conta(agencia, conta, saldo){
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

Conta.prototype.sacar = function(valor){
if(this.saldo < valor){
    console.log(`Saldo insuficiente: ${this.saldo}`);
   return;
}
this.saldo -= valor;
this.verSaldo();
};


Conta.prototype.depositar = function(valor){
    this.saldo += valor;
    this.verSaldo();
};
Conta.prototype.verSaldo = function(){
    console.log(`Ag/c: ${this.agencia}/${this.conta} | ` + 
        `Saldo: R$${this.saldo.toFixed(2)}`
    );
}; 

const conta1 = new Conta(11, 22, 10);
//conta1.depositar(11);
//conta1.depositar(10);
//conta1.sacar(30);
//conta1.sacar(0.01);

function ContaCorrente(agencia, conta, saldo, limite){
Conta.call(this, agencia, conta, saldo);
this.limite = limite;

};
ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;

ContaCorrente.prototype.sacar = function(valor){
if((this.saldo + this.limite) < valor){
    console.log(`Saldo insuficiente: ${this.saldo}`);
   return;
}
this.saldo -= valor;
this.verSaldo();
};



function CP(agencia, conta, saldo){
Conta.call(this, agencia, conta, saldo);


};
CP.prototype = Object.create(Conta.prototype);
CP.prototype.constructor = CP;

const conta2 = new ContaCorrente(22, 22, 0, 100);
const cp = new CP(12, 33, 0,)

conta2.depositar(10);
conta2.sacar(110);
conta2.sacar(10);

cp.depositar(10);
cp.sacar(110);
cp.sacar(1);