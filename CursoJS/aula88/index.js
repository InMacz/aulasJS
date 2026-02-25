function rand(min, max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAI(msg, tempo){
    return new Promise((resolve, reject)=> {
        if(typeof msg !== 'string'){
        reject('CAI NO ERRO');
        return;  
        } 
        setTimeout(()=>{
            resolve(msg.toUpperCase() + " - Passei na promise");
            return;
        }, tempo);
        
    });
}

// Promise.all Promise.race Promise.resolve Promise.reject
const promises = [
    //'Primeiro valor',
    esperaAI('Promise 1', rand(1, 5)),
    esperaAI('Promise 2', rand(1, 5)),
    esperaAI('Promise 3', rand(1, 5)),
    //esperaAI(1000, 1000),
    //'Outro Valor'


];

Promise.race(promises)
.then(function(valor){
console.log(valor);
})
.catch(function(erro){
    console.log(erro);
})

function baixaPagina(){
    const emCache = true;
    if(emCache){
return Promise.reject('Página em cache');
    }else{
    return esperaAI('Baixei a página', 3000)
}
}

baixaPagina()
.then(dadosPagina =>{
    console.log(dadosPagina);
})
.catch(e => console.log('ERRO', e));

