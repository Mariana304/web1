//*****************CREAR LA FUNCION**************

function CalcularVlrHora(NroH, salario = 3500000){
    let VlrH = salario / 240;
    let neto = NroH * VlrH
    return neto;


}


//*******************LLAMR LA FUNCION************** 

let horas = parseInt(prompt("Horas trabajadas en el mes"))
let neta = CalcularVlrHora(horas);


console.log(`Horas trabajas ${horas} 
            \ntotal a pagar ${neta}`);
            
horas = 240;
neto = CalcularVlrHora(horas , 1160000);
console.log(`Horas trabajas ${horas} 
            \ntotal a pagar ${neto}`);