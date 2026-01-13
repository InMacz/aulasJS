// Escreva uma função chamada ePaisagem que
// recebe dois argumentos, largura e altura
// de uma imagem (number).
// Returne true se a imagem estiver no modo paisagem
function ePaisagem(largura, altura){
    return largura > altura ? true : false;
}
console.log(ePaisagem(1921, 1920));

// OU
function ePaisagem2(largura, altura){
    if(largura > altura){
        return true;
    }else{
        return false;
    }

}
console.log(ePaisagem2(21, 20))

// OU

const ePaisagem3 = (largura, altura) => largura > altura;
console.log(ePaisagem3 (2001, 2000))