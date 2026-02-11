let num1 = prompt ('Digite um número:');
let num2 = prompt ('Digite outro número:');
num1 = parseInt (num1); // poderia usar parseFloat ou Number no lugar do parseInt!
num2 = parseInt (num2);

const resultado = num1 + num2;
alert(`O resultado da soma é: ${resultado}`);