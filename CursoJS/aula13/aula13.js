// 3 maneiras de se escrever a mesma coisa!, o melhor é com template strings, a terceira opção
let umaString = "O rato roeu a roupa do rei de roma.";
console.log(umaString.concat(' em um lindo dia.'));
console.log(umaString + ' em um lindo dia.');
console.log(`${umaString} em um lindo dia.`);

console.log(umaString.indexOf('e'));
console.log(umaString.search(/x/));
console.log(umaString.replace(/r/g, '#'));

console.log(umaString.length);
console.log(umaString.slice(2, 6));

console.log(umaString.split(' ', 6));
console.log(umaString.toLocaleUpperCase());
console.log(umaString.toLocaleLowerCase());

