
function zeroAEsquerda (num){
    return num >= 10 ? num : `0${num}`;
}

function dataBonita(){
let diaSemana = (data.getDay());
const dia = (data.getDate());
const mes = (data.getMonth() + 1);
const ano = zeroAEsquerda(data.getFullYear());
const hora = zeroAEsquerda(data.getHours());
const min = zeroAEsquerda(data.getMinutes());
const seg = zeroAEsquerda(data.getSeconds());
let diaSemanaTexto;
let mesTexto;


switch(diaSemana){
    case 0: 
    diaSemanaTexto = 'Domingo';
    break;
    case 1: 
    diaSemanaTexto = 'Segunda-Feira';
    break;
    case 2: 
    diaSemanaTexto = 'Terça-Feira';
    break;
    case 3: 
    diaSemanaTexto = 'Quarta-Feira';
    break;
    case 4: 
    diaSemanaTexto = 'Quinta-Feira';
    break;
    case 5: 
    diaSemanaTexto = 'Sexta-Feira';
    break;
    case 6: 
    diaSemanaTexto = 'Sábado';
    break;
    default: 
    diaSemanaTexto = 'não deu';
    break;
}

switch(mes){
    case 1: 
    mesTexto = 'Janeiro';
    break;
    case 2: 
    mesTexto = 'Fevereiro';
    break;
    case 3: 
    mesTexto = 'Março';
    break;
    case 4: 
    mesTexto = 'Abril';
    break;
    case 5: 
    mesTexto = 'Maio';
    break;
    case 6: 
    mesTexto = 'Junho';
    break;
    case 7: 
    mesTexto = 'Julho';
    break;
    case 8: 
    mesTexto = 'Agosto';
    break;
    case 9: 
    mesTexto = 'Setembro';
    break;
    case 10: 
    mesTexto = 'Outubro';
    break;
    case 11: 
    mesTexto = 'Novembro';
    break;
    case 12: 
    mesTexto = 'Dezembro';
    break;
    default: 
    mesTexto = 'não deu';
    break;
}
return `${diaSemanaTexto}, ${dia} de ${mesTexto} de ${ano} ${hora}:${min}`
}
const data = new Date();
const dataBrasil = dataBonita(data);
const mostra = document.querySelector('.data');
mostra.innerHTML = (dataBrasil);
console.log (`A DATA DE HOJE É ESSA BROTHERRRR  ${dataBrasil}`);




// PODEMOS FAZER ASSIM, BEM MAIS SIMPLES

/*const h1 = document.querySelector('.data');
const data = new Date();

h1.innerHTML = data.toLocaleDateString('pt-BR', {  weekday: 'long',
  day: '2-digit',
  month: 'long',
  year: 'numeric',
  hour: '2-digit',
  minute: '2-digit'});*/
