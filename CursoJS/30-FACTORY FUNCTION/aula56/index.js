// Factory function (Função fábrica)
function criaPessoa(nome, sobrenome, altura, peso){
    return {
        nome,
        sobrenome,
        //Getter
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`
        },
        //Setter
        set nomeCompleto(valor){
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
            console.log(valor);

        },
        fala: function(assunto){
            return `${this.nome} está ${assunto}.`;
        },
        altura,
        peso,
        // Getter
        get imc(){
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa('Luiz', 'Otavio', 1.8, 80);
const p2 = criaPessoa('Maria', 'Joaquina', 1.6, 76);
p1.nomeCompleto = 'Maria Oliveira Silva';
console.log(p1.fala('falando sobre a vida'));
console.log(p1.imc);
console.log(p1.sobrenome);