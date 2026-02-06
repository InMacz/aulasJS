// defineProperty - defineProperties
function Produto (nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;
    

   Object.defineProperties(this, {
    nome:{
        enumerable: true, // mostra a chave
        value: nome, // valor
        writable: false, // pode alterar
        configurable: true // configurável
    },
    preco: {
        enumerable: true, // mostra a chave
        value: preco, // valor
        writable: false, // pode alterar
        configurable: true // configurável
    },

});
}



const p1 = new Produto('Camiseta', 20, 3);
console.log(p1)