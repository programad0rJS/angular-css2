
const cliente = {
    nombre: 'josue',
    saldo: 500
}
console.log(cliente);


function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

const josue = new Cliente('Juan', 400);

console.log(josue);