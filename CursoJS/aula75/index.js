// new Object -> Object.prototype
/*const objA = {
    chaveA:  'A'
    // __proto__: Object.prototype
};

const objB = {
    chaveB:  'B'
    // __proto__: ObjA
};

const objC = new Object();
objC.chaveC = 'C';

Object.setPrototypeOf(objB, objA);
Object.setPrototypeOf(objC, objB);
console.log(objC.chaveB);*/

function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;
}
Produto.prototype.desconto = function(porcentagem){
this.preco = this.preco - (this.preco*(porcentagem / 100));
}

Produto.prototype.aumento = function(porcentagem){
this.preco = this.preco + (this.preco*(porcentagem / 100));
}

const p1 = new Produto('camiseta', 50);
const p2 = {
    produto: 'Caneca',
    preco: 20
};

Object.setPrototypeOf(p2, Produto.prototype);

const p3 = Object.create(Produto.prototype, {
    preco: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 42
    },
    tamanho2: {},
});
p3.nome = 'Bola';

p3.aumento(100);
console.log(p3);
//p1.desconto(50);
p2.aumento(100);
console.log(p2);