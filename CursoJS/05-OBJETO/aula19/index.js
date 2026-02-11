/* Primitivos(imutáveis ) - string, number, boolean, undefined, null (bigint, symbol) - Valores copiados

Referência (mutável) - array, object, function - Passados por referência
*/

//console.log(a, b);
const a = {
    nome: 'Luiz',
    sobrenome: 'Otávio'
};
//const b = a;// nesse momento B aponta para o mesmo local de A na memória
const b = {...a}; // nesse caso b vira independente de A, se A altera B mantém oq estava em A
a.nome = 'João';
console.log(b);
console.log(a);