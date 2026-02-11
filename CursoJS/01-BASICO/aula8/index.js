const nome = 'William'; 
const sobrenome = 'Xavier Ribeiro';
const idade = 18;
const peso = 87;
const alturaEmM = 2.00;
let imc; // peso / (altura*altura)
let anoNascimento;
imc = peso / (alturaEmM*alturaEmM);
anoNascimento = 2025 - idade;
// template strings
console.log (`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg tem ${alturaEmM} metros de altura e seu IMC é de ${imc} `);

console.log (`${nome} ${sobrenome} nasceu em ${anoNascimento}.`);

