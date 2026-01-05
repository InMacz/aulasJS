const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25,

    fala(){
        console.log(`A minha idade atual é ${this.idade}.`);
    },

    incrementaIdade(){
        this.idade++;
    }
    
};

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();






/*function criaPessoa (nome, sobrenome, idade){
    return{nome,sobrenome,idade};
}
const pessoa1 = criaPessoa('Luiz', 'Otávio', 25);
const pessoa2 = criaPessoa('Will', 'Foda', 15);
const pessoa3 = criaPessoa('Mara', 'Xavier', 245);
const pessoa4 = criaPessoa('Ale', 'Ribeiro', 35);
const pessoa5 = criaPessoa('Murilo', 'Ribeiro', 65);
console.log(pessoa1.nome, pessoa2.nome, pessoa3.nome); */







/*const array = [1, 2, 3];
array.push(4);
array[0] = 'Luiz';
console.log(array); */