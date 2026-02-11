//return
//retorna um valor
// Termina a função
function soma (a, b){
    return a + b;
}
console.log(soma(2, 1));

function criaPessoa(nome, sobrenome){
    return {nome, sobrenome};
}

const p1 = criaPessoa('Luiz', 'Otávio');
const p2 ={
    nome: 'João',
    sobrenome: 'Alberto'
};

console.log(p1);
console.log(p2);

function criaMultiplicador (multiplicador){
    //multiplicador
    return function(n){
        return n * multiplicador;
    };
}
const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(5));
console.log(triplica(5));
console.log(quadriplica(5));