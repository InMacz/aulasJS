/*
Operadores Lógicos
&& -> AND -> E -> TODAS AS EXPRESSÕES PRECISAM SER VERDADEIRAS PARA RETORNAR TRUE
|| -> OR -> OU
! -> NOT -> NÃO
*/
// const expressaoAnd = true && true && true && true;
// const expressaoOr = false || false || true || false || false; // só retorna false se todas forem false
const usuario = 'Luiz'; // form usuário digitou
const senha = 123456; // form usuário digitou

const vaiLogar = usuario === 'Luiz' && senha === 123456;

console.log(vaiLogar);
console.log(!true);