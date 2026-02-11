
function soma(x, y){
    if(typeof x !== 'number' || typeof y !== 'number'){
        throw('x e y precisam ser números');
    }
    return x + y;
}


try{ // se ocorre algum erro no bloco try, catch é executado, se não try é executado normalmente
    console.log(soma(1, 2));
    console.log(soma('1', 2));

}catch(error){
    //console.log(error);
    console.log('Alguma coisa mais amigável pro usuário.');
}





/*try {
    console.log(naoExisto);
}catch(err){
    console.log('naoExisto não existe');
    console.log(err);
}*/