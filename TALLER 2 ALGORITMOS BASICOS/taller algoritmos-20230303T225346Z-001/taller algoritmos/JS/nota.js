


let Nombre, Apellido, Definitiva;

Nombre = "Alejandra"
Apellido = "Lopez"
Definitiva = 4.55

if (Definitiva >0 && Definitiva <6){
    if(Definitiva <=2 ){console.log(`${Nombre} ${Apellido} Definitiva:${Definitiva} Deficit de aprendizaje`)}
    else if(Definitiva >2 && Definitiva <=3) {console.log(`${Nombre} ${Apellido} Definitiva:${Definitiva} Debes recuperar`)}
    else if(Definitiva >3  && Definitiva <=4) {console.log(`${Nombre} ${Apellido} Definitiva:${Definitiva} Buen rendimiento`)}
    else if(Definitiva >4  && Definitiva <=4.50) {console.log(`${Nombre} ${Apellido} Definitiva:${Definitiva} Sobresaliente`)}
    else if(Definitiva >4.50  && Definitiva  <=5) {console.log(`${Nombre} ${Apellido} Definitiva:${Definitiva} Exelente rendimiento`)} 
    
 }
 else {
    console.log("Error en la nota. Verifica")
 }


