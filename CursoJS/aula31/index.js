const verdadeira = true;

// Let tem escopo de bloco {... bloco}
// Var só tem escopo de função
let nome = 'William';
var nome2 = 'Luiz'; // podemos reatribuir ex: var nome2 = 'Otávio';

if (verdadeira){
    let nome = 'Otávio'; // criando
    var nome2 = 'Rogério'; // redeclarando

    if (verdadeira) {
        var nome2 = 'Ronaldo'; // redeclarando
        let nome = 'Outra coisa'; // criando
    }
}

console.log(nome, nome2); // retorna William Ronaldo pois a variavel var esta sendo redeclarada, ja a variavel let esta sendo criada novamente dentro do escopo de cada if