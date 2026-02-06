// Construtora -> molde (classe)


function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
    Pessoa.prototype.nomeCompleto = this.nome + ' ' + this.sobrenome; // Prototype 
}


// instância
const pessoa1 = new Pessoa('Luiz', 'Otávio'); // <- Pessoa = Função contrutora
const data = new Date();

console.dir(pessoa1);
console.dir(pessoa1.nomeCompleto);