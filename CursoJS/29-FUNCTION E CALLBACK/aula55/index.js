// IIFE -> Immediately invoked function expression
(function(idade, peso, altura){

const sobrenome = 'Xavier'
function criaNome(nome){
    return `${nome} ${sobrenome}`;
}

function falaNome(){
    console.log(criaNome('William'));
}

falaNome();
console.log(`idade: ${idade} peso: ${peso} e altura: ${altura} metros`)

})(18, 87, 2);