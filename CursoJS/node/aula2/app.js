const Cachorro = require('./mod');
const p1 = new Cachorro('José');
p1.latir();
console.log(__filename); // te direciona para o arquivo atual
console.log(__dirname); // te direciona para a pasta atual