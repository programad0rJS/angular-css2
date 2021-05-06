class Cliente { 

    constructor( nombre, saldo ) {
        this.nombre = nombre;
        this.saldo = saldo;
    }

}


const josue = new Cliente('josue', 400);

console.log(josue);



const Cliente2 = class {
    constructor( nombre, saldo ) {
        this.nombre = nombre;
        this.saldo = saldo;
    }

}

const josue2 = new Cliente2('josue', 400);
console.log(josue2);