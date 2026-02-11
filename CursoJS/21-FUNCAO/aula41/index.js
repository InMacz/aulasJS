// Escreva uma função que recebe 2 números e retorne o maior deles

function recebe(x, y){

if(x > y ){
    return `O número ${x} é o maior`
}else{
    return `O número ${y} é o maior`
}


};

console.log(recebe(5, 4));

// MANEIRA MAIS SIMPLIFICADA DE FAZER A MESMA COISA

const recebe2 = (x, y) => x > y ? x : y;
console.log (recebe2(4, 3));