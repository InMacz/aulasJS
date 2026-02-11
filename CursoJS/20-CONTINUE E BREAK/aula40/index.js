const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let numero of numeros) {

    if (numero === 2){
        console.log('Pulei o número 2');
        continue; // pula para a próxima iteração, mas continua executando
    }

    if(numero === 7){
        console.log('7 encontrado, saindo...');
        break; // termina o laço
    }
    console.log(numero);
}