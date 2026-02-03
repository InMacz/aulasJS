/* const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otávio'
};
*/
/* const pessoa = new Object;
pessoa.nome = 'Luiz';
pessoa.sobrenome = 'Otávio';
pessoa.idade = 19;
pessoa.falarNome = function(){
    return (`${this.nome} está falando seu nome.`);
};
pessoa.getDataNascimento = function () {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
};

for (let chave in pessoa){
    console.log(pessoa[chave]);
}
*/

// Factory function  / Classes

function criaPessoa(nome, sobrenome){
return{
    nome,
    sobrenome,
    nomeCompleto(){
        return `${this.nome} ${this.sobrenome}`;
    }
};
};

//const p1 = criaPessoa('Luiz', 'Otávio');
//console.log(p1.nomeCompleto());


// Constructor function
function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
}

const p1 = new Pessoa ('Luiz', 'Miranda');
Object.freeze(p1); // não sera mais alterado
const p2 = new Pessoa ('Maria', 'Eduarda');
p1.nome = 'Outra coisa'
console.log(p1);
console.log(p2);