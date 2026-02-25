function rand(min, max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAI(msg, tempo){
    return new Promise((resolve, reject)=> {
        if(typeof msg !== 'string') reject('BAD VALUE');
        setTimeout(()=>{
            resolve(msg);
        }, tempo)
    });
    
    
    
    
}

esperaAI('Conexão com o BD', rand(1, 3))
.then(resposta => {
    console.log(resposta);
    return esperaAI('Buscando dados da BASE', rand(1, 3));
})
.then(resposta => {
    console.log(resposta);
    return esperaAI ('Tratando os dados da BASE', rand(1, 3));
})
.then(resposta =>{
    console.log(resposta)
})
.then(resposta =>{
    console.log('Exibe dados na tela');
})
.catch(e => {
    console.log('ERRO:', e);
});
