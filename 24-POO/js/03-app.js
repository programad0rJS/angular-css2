class Cliente { 

    constructor( nombre, saldo ) {
        this.nombre = nombre;
        this.saldo = saldo;
    }
    imprimirSaldo() {
        return `Hola ${this.nombre}, tu saldo es: ${this.saldo}`;
    }

    retiraSaldo(retiro) {
        this.saldo -= retiro;
    }
    static bienvenida(){
        return `Bienvenido al cajero`;
    }
}


class Empresa extends Cliente {
    constructor(nombre, saldo, telefono, tipo) {
      
        super(nombre, saldo);
     
        this.telefono = telefono;
        this.tipo = tipo;
    }

    static bienvenida(mensaje){ 
        return `Bienvenido al cajero para empresas`;
    }
}



const pedro = new Cliente('Pedro', 3000);
console.log(pedro);
console.log(pedro.imprimirSaldo() );

const empresa = new Empresa('Empresa1', 10000, 10290193, 'Construccion');

console.log(empresa.imprimirSaldo() );

console.log(Empresa.bienvenida() );
console.log(Cliente.bienvenida() );