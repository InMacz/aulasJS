/*
Object.values
Object.entries
Object.assign(des, any)
Object.getOwnPropertyDescriptor(o, 'prop')
... (spread) espalha os valores do objeto

// Já vimos
Object.keys (retorna as chaves do objeto)
Object.freeze (Congela o objeto)
Object.defineProperties (define várias propriedades)
Object.defineProperty (define uma propriedade)
*/

const produto = {nome: 'Caneca', preco: 1.8};
//Object.freeze(produto);// Congela o objeto, não pode ser modificado


/*const caneca = {
    ...produto,// spread operator espalha os valores do objeto
    material: 'Porcelana'
}; 
caneca.nome = 'Outro nome';
caneca.preco = 5;

console.log(produto);
console.log(caneca);*/
Object.defineProperty(produto, 'nome', {
    writable: true, // Pode modificar se estiver true
    configurable: false, // Pode configurar se estiver true
    value: 'Qualquer outra coisa'
    

})

console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));

console.log(Object.values(produto)); // retorna os valores do objeto
console.log(Object.entries(produto)); // retorna a chave e valor em arrays

for (let entry of Object.entries(produto)){
    console.log(entry);
}