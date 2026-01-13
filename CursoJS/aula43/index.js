// escreva uma função que retorne um número e
// retorne o seguinte:
// número divisível por 3 = Fizz
// número divisível por 5 = Buzz
// número divisível por 3 e por 5 = FizzBuzz
// número não é divisível por 3 e por 5 = retorna o próprio número
// checar se o numero é realmente um numero = retorna o próprio número
// use a função com números de 0 a 100


function recebe(x){
    if(x % 3 === 0 && x % 5 === 0){
        return('FizzBuzz')

    }if (x % 5 === 0){
        return('Buzz');
    }if (x % 3 === 0 ){
        return('Fizz');
    }if (typeof x !== 'number'){
        return(NaN);
    }else{
        return ('não divisível');
    }
}
console.log( 'letra a = ', recebe('a'));
for (let i = 0; i <= 15; i++){
    console.log(i, recebe(i));
}

console.log('############################################');
// OU

function fizzBuzz(numero){
if (typeof numero !== 'number') return numero;
if (numero % 3 === 0 && numero % 5 === 0) return 'FizzBuzz';
if (numero % 3 === 0) return 'Fizz';
if (numero % 5 === 0) return 'Buzz';
return numero;

}
for (let i = 0; i <= 15; i++){
    console.log(i, fizzBuzz(i));
}