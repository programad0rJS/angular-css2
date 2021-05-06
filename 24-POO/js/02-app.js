class Cliente { 

    constructor( nombre, saldo ) {
        this.nombre = nombre;
        this.saldo = saldo;
    }


    imprimirSaldo() {
        return `hola ${this.nombre}, tu saldo es: ${this.saldo}`;
    }

    retiraSaldo(retiro) {
        this.saldo -= retiro;
    }


  

    static bienvenida(){
        return `Bienvenido al cajero`;
    }

}

const josue = new Cliente('josue', 400);

console.log(josue);

console.log(josue.imprimirSaldo() );
josue.retiraSaldo(200);
console.log(josue.imprimirSaldo() );




console.log( Cliente.bienvenida() ); 