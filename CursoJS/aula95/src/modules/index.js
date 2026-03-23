class ValidaCPF{

    constructor(cpfEnviado){
        this.cpfEnviado = cpfEnviado;
        this.cpfLimpo = this.limpaCPF();
    }

    limpaCPF() {
        return this.cpfEnviado.replace(/\D+/g, "");
    }

criaDigito(cpf){
       const cpfArray = Array.from(cpf);
       let regressivo = cpfArray.length + 1;

       const total = cpfArray.reduce((ac, val)=>{
        ac += regressivo * Number(val);
        regressivo--;
        return ac;
       }, 0);
    const digito = 11 - (total % 11);
    return digito > 9 ? '0' : String(digito);
    }

    verificaCPF(){
        if (!this.cpfLimpo) return false;
        if (this.cpfLimpo.length !== 11)return false;
        if (this.eSequencia()) return false;
        const cpfParcial = this.cpfLimpo.slice(0, -2);
        const digito1 = this.criaDigito(cpfParcial);
        const digito2 = this.criaDigito(cpfParcial + digito1);
        const novoCPF = cpfParcial + digito1 + digito2;

        return novoCPF === this.cpfLimpo;
        
    }

    novoCPF(){
    return this.cpfParcial + this.digito1 + this.digito2;
    } 

    eSequencia(){
        return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo;
    }
}

const cpf1 = new ValidaCPF("111.111.111-11");

console.log(cpf1.verificaCPF() ? 'CPF VÁLIDO' : 'CPF INVÁLIDO');
