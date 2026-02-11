//               -5       -4       -3         -2        -1      // Caso use no negativo
//                0        1        2          3         4      // Caso use no positivo
const nomes = [ 'William', 'Maria', 'Mario', 'Gabriel', 'Júlia'];
nomes.splice(0, 0, 'Luiz', 'Otavio');


console.log(nomes);
// nomes.splice (índice atual, delete, elem1, elem2, elem3);

// pop
// const removidos = nomes.splice(-1, 1); Funciona tanto no negativo quanto no positivo

//shift
// const removidos = nomes.splice(0, 1);

// push
// nomes.splice(nomes.length, 0, 'Luiz');

// unshift
// nomes.splice(0, 0, 'Luiz', 'Otavio');