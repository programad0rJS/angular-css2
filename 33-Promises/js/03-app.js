

const aplicarDescuento = new Promise( (resolve, reject) => {
    const descuento = true;

  
    if(descuento) {
        resolve('Descuento Aplicado'); 
    } else {
        reject('No se pudo aplicar el descuento');
    }

});

aplicarDescuento
    .then( resultado =>  {
        console.log(resultado);
    }).catch( error => {
        console.log(error);
    });

    console.log(aplicarDescuento);


function descuento() {
    console.log('Aplicando el Descuento...');
}