function ValidaCPF(cpfEnviado){
Object.defineProperty(this, 'cpfLimpo', {
    enumerable: true,
get: function(){
    return cpfEnviado.replace(/\D+/g, '');
}
});
}

ValidaCPF.prototype.valida = function(){
if (typeof this.cpfLimpo === 'undefined') return false;
if(this.cpfLimpo.length !== 11) return false;
if(this.isSequencia()) return false;

const cpfParcial = this.cpfLimpo.slice(0, -2);
const digito1 = this.criaDigito(cpfParcial);
const digito2 = this.criaDigito(cpfParcial + digito1);

const novoCpf = cpfParcial + digito1 + digito2;
return novoCpf === this.cpfLimpo;

return true;
};

ValidaCPF.prototype.criaDigito = function(cpfParcial){
const cpfArray = Array.from(cpfParcial);
let regressivo = cpfArray.length + 1;
const total = cpfArray.reduce((ac, val) =>{
    ac += (regressivo * Number(val));
    regressivo--;
    return ac;
}, 0);

const digito = 11 - (total % 11);
return digito > 9 ? '0' : String(digito);

}

ValidaCPF.prototype.isSequencia = function (){
    const sequencia =  this.cpfLimpo[0].repeat(this.cpfLimpo.length);
    return sequencia === this.cpfLimpo;
};
const cpf = new ValidaCPF('511.678.418-59');
console.log(cpf.valida());

if(cpf.valida()){
    console.log('Cpf válido');

}else{
    console.log('Cpf inválido');
}











// 511.678.058-95
/*
5x  1x  1x  6x  7x  8x  0x  5x  8x
10  9   8   7   6   5   4   3   2
50  9   8   42  42  40  0   15  16 = 222

11 - (222 % 11) = 9 (Primeiro digito)
Se o número for maior que 9, consideramos 0.

5x  1x  1x  6x  7x  8x  0x  5x  8x  9x
11  10  9   8   7   6   5   4   3   2
55  10  9   48  49  48  0   20  24  18 = 281

11- (281 % 11) = 5

*/