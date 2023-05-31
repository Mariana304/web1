


/*if (Usuario){
    if(Usuario == 1 && NroHs >= 5){console.log(`Descuento del 20% ${total}`);} 
    else if(Usuario == 1 && NroHs < 5) {console.log(`Descuento del 10%`)}
    else if(Usuario == 2 && NroHs >= 10) {console.log(`Descuento del 15%`)}
    else if(Usuario == 2 && NroHs < 10) {console.log(`Descuento del 5%`)}
    else if(Usuario == 3 && NroHs >= 4) {console.log(`Descuento del 10%`)}
    else if(Usuario == 3 && NroHs < 4) {console.log(`Descuento del 3%`)}
   
}
else{
    console.log(`Error`)
}*/





/*if(Usuario == 1 && NroHs >=5 )
    {console.log(`Descuento 20%`)  } 
    
 else {
    console.log("Descuento 10%")
 }
 
 
 if(Usuario == 2 && NroHs >=10 )
    {console.log(`Descuento 15%`)  } 
    
 else {
    console.log("Descuento 5%")
 }
 
 if(Usuario == "Particular" && NroHs >=4 )
    {console.log(`Descuento 10%`)  } 
    
 else {
    console.log("Descuento 3%")
 }
 */

 let Placa, Usuario, VlrH, NroHs, Subtotal, Total, Desc; //crear las variables 

 //nombrar las variables
Placa = parseInt(prompt("Ingrese numero de placa"))
Usuario = parseInt(prompt("Elija: 1-Estudiante  2-Empleado  3-Particular"))
VlrH = 1200
NroHs = parseInt(prompt("Nro de horas"))
Subtotal = (VlrH * NroHs)

switch (Usuario){

   case 1 : {
      if (NroHs >5){

         Desc = Subtotal*0.2
         Total = Subtotal - Desc

         console.log(`Nro de placa ${Placa}  
         \nVlr Hora ${VlrH}  
         \nNro de horas ${NroHs} 
         \nTotal sin descuento ${Subtotal} 
         \nDescuento ${Desc} 
         \nTotal a pagar ${Total}
         \n ***********COLILLA DE PAGO***********`)
      }

      else{ 

         Desc = Subtotal*0.1
         Total = Subtotal - Desc

         console.log(`Nro de placa ${Placa}  descuento del 10%
         \nVlr Hora ${VlrH}  
         \nNro de horas ${NroHs} 
         \nTotal sin descuento ${Subtotal} 
         \nDescuento ${Desc} 
         \nTotal a pagar ${Total}
         \n ***********COLILLA DE PAGO***********`)}

   }
   break;

   case 2 : {
      if (NroHs >10){

         Desc = Subtotal*0.15
         Total = Subtotal - Desc

         console.log(`Nro de placa ${Placa} descuento del 15%  
         \nVlr Hora ${VlrH}  
         \nNro de horas ${NroHs} 
         \nTotal sin descuento ${Subtotal} 
         \nDescuento ${Desc} 
         \nTotal a pagar ${Total}
         \n ***********COLILLA DE PAGO***********`)
      }

      else{ 

         Desc = Subtotal*0.5
         Total = Subtotal - Desc

         console.log(`Nro de placa ${Placa}  descuento del 5%
         \nVlr Hora ${VlrH}  
         \nNro de horas ${NroHs} 
         \nTotal sin descuento ${Subtotal} 
         \nDescuento ${Desc} 
         \nTotal a pagar ${Total}
         \n ***********COLILLA DE PAGO***********`)}
      }


   break;

      case 3 : {
      if (NroHs >4){

         Desc = Subtotal*0.10
         Total = Subtotal - Desc

         console.log(`Nro de placa ${Placa} descuento del 10%  
         \nVlr Hora ${VlrH}  
         \nNro de horas ${NroHs} 
         \nTotal sin descuento ${Subtotal} 
         \nDescuento ${Desc} 
         \nTotal a pagar ${Total}
         \n ***********COLILLA DE PAGO***********`)
      }

      else{ 

         Desc = Subtotal*0.3
         Total = Subtotal - Desc

         console.log(`Nro de placa ${Placa}  descuento del 3%
         \nVlr Hora ${VlrH}  
         \nNro de horas ${NroHs} 
         \nTotal sin descuento ${Subtotal} 
         \nDescuento ${Desc} 
         \nTotal a pagar ${Total}
         \n ***********COLILLA DE PAGO***********`)}

   }
   

}

    



 