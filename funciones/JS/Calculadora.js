    let Suma = (Nro1, Nro2) => Nro1 + Nro2;


let Resta = (Nro1, Nro2) => Nro1 - Nro2


let Multiplicacion = (Nro1, Nro2) => Nro1 * Nro2


function Divicion (Nro1, Nro2){
    if(Nro2 != 0){ return Nro1 / Nro2}
    else {return 0}
}

function Principal(){
    let Nro1 = 5; let Nro2 = 8
    let option = parseInt(prompt("1-.Suma\n 2-.Resta\n 3-.Multiplicar\n 4-.Dividir digite Nro de la operacion"))
    
    switch (option){
    case 1: console.log("La suma es: ",  Suma(Nro1, Nro2)); break;
    case 2: console.log("La resta es: ",  Resta(Nro1, Nro2)); break;
    case 3: console.log("La multiplicacion es: ",  Multiplicacion(Nro1, Nro2)); break;
    case 2: console.log("La divicion es: ",  Divicion(Nro1, Nro2)); break; 
    
    }
    
}



Principal()






