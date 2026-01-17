// Declaração de função (Function hoisting)
function falaOi(){
    console.log('oi');
};
falaOi();

// First-class objects (Objetos de primeira classe)
const souUmDado = function(){
    console.log('Sou um dado');
};
souUmDado();

// Arrow function
const funcaoArrow = () => {
    console.log('Sou uma arrow function');
};
funcaoArrow();

const obj = {
    falar(){
        console.log('Estou falando...');
    }
};
obj.falar();