
const amarelo = document.querySelector('.amarelo');
const vermelho = document.querySelector('.vermelho');
const azul = document.querySelector('.azul');
const reset = document.querySelector('.reset');

function mudarCor(cor){
document.body.classList.remove('bg-amarelo', 'bg-vermelho', 'bg-azul', 'body');
document.body.classList.add(`bg-${cor}`)


}

amarelo.addEventListener('click', () => mudarCor('amarelo'));
vermelho.addEventListener('click', () => mudarCor('vermelho'));
azul.addEventListener('click', () => mudarCor('azul'));
reset.addEventListener('click',() => mudarCor('body') )

