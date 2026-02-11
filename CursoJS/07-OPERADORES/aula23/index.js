/*
&& -> todas verdadeiras para retornar true
|| -> todas falsas para retornar false
VALORES QUE O JS AVALIA EM FALSO:
false
0
'' "" `` // strings vazias
null / undefined
NaN

function falaOi (){

    return 'Oi';
}
const vaiExecutar = 1;
*/
           //   or        or      or              or 
//console.log(0 || false || null || 'Luiz Otávio' || true); // pega o primeiro dado true e exibe no console

/*const corUsuario = undefined;
const corPadrao = corUsuario || 'preto';

console.log(corPadrao);
nesse momento o console retorna a opção de cor que o usuario escolher se ele não alterar passa a ser undefined, indo para a corPadrao que é preto!

*/
const a = 0;
const b = null;
const c = false;
const d = false;
const e = NaN;
 console.log(a || b || c || d || e); // se todas forem falsas o console retorna a última falsa, se uma delas forem true, console retorna o primeiro objeto true