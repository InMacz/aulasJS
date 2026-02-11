// MAIOR DIFERENÇA ENTRE FOR IN E FOR OF
//FOR IN = PERCORRE OS ÍNDICES, IDEAL PARA OBJETOS
//FOR OF PERCORRE OS VALORES, IDEAL PARA ARRAYS, STRINGS, ITERÁVEIS
// FOR CLÁSSICO = GERALMENTE COM ITERÁVEIS (ARRAYS OU STRINGS)
//🧠 Regra prática para lembrar
//Objeto → for...in
//Array / String → for...of


const nomes = ['William', 'Murilo', 'Mateus'];

for(let i = 0; i < nomes.length; i++){
    console.log(nomes[i]);
}

console.log('######');

for (let i in nomes){
    console.log(nomes[i]);
}

console.log('######');

for (let valor of nomes){
    console.log(valor);
}

console.log('######');

nomes.forEach(function(valor, indice, array){
console.log(valor, indice, array);

})