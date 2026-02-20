class ControleRemoto{
    constructor(tv){
        this.tv = tv;
        this.volume = 0;
    }
// método de instância // quando o método será usado no Objeto, nesse caso controle1 por exemplo
    aumentarVolume(){
        this.volume += 2;
    }
// método de instância // quando o método será usado no Objeto, nesse caso controle1 por exemplo
    diminuirVolume(){
        this.volume -= 2;
    }

    // método estático// quando o método serve para a Classe
    static trocaPilha(){
console.log('Ok, vou trocar');
    }
    
}
const controle1 = new ControleRemoto('LG');
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.diminuirVolume();
ControleRemoto.trocaPilha();
console.log(controle1);