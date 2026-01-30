// Filter -> sempre retorna um array, com a mesma quantidade de elementos ou menos 
// 
//const numeros = [5, 50, 80, 1, 2, 3, 4, 5, 8, 7, 11, 15, 22, 27];

//function callbackFilter(valor){
//    return valor > 10;
//}
//const numerosFiltrados = numeros.filter(callbackFilter);
// OU FAZER COM UMA FUNÇÃO ANONIMA

//const numerosFiltrados = numeros.filter(valor =>  valor > 10);
//console.log(numerosFiltrados);

//Retorne as pessoas que tem o nome com 5 letras ou mais
// Retorne as pessoas com mais de 50 anos
// Retorne as pessoas cujo nome termina com a

const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
];



const pessoasFiltradasNomes = pessoas.filter(obj => obj.nome.length >= 5);
const pessoasMaisVelhas = pessoas.filter(obj => obj.idade > 50);
const pessoasFinalA = pessoas.filter(function(obj){
return obj.nome.toLowerCase().endsWith('a');
});





console.log(pessoasFiltradasNomes)
console.log(pessoasMaisVelhas)
console.log(pessoasFinalA)

