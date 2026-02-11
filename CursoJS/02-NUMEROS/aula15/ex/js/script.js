let numero = prompt('Digite um número:');
numero = Number(numero);
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;
texto.innerHTML = `<p> Raiz quadrada:${Math.sqrt(numero)} <p/>
<p> ${numero} é inteiro: ${Number.isInteger(numero)}<p/>
<p> seu número é NaN?: ${Number.isNaN(numero)}<p/>
<p>Arredondando para baixo: ${Math.floor(numero)} <p/>
<p>Arredondando para cima: ${Math.ceil(numero)} <p/>
<p>Arredondando para o mais próximo: ${Math.round(numero)} <p/>
<p>Com 2 casas decimais ${numero.toFixed(2)} <p/>


`;