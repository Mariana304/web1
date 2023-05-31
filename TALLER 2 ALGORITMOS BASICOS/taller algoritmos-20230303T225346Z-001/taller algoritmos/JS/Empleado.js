/*Realizar una aplicación web, utilizando la instrucción Swicth, donde se ingrese: El nombre del
empleado, el código de su perfil e imprima los siguientes datos */


let Empleado, Codigo, Aumento, Total, Bonific;

Empleado = parseFloat(prompt("Ingrese su nombre"));

Codigo = parseFloat(prompt("Ingrese codigo de perfil"))


switch (Codigo){
    case 1 : {

        Aumento = 5500000 * 0.09;
        Bonific = 1925000;
        Total = (5500000 + Aumento) + Bonific ;

        if(Codigo == 1){
            console.log(` Empleado: ${Empleado} 
            \n Codigo del empleado: ${Codigo}
            \n Administrador de servidores
            \n Salario: 5,500,000
            \n Aumento del 9%
            \n Bonificacion: 1,925,000
            \n Total a pagar ${Total}
            `)
        }
    }


    case 2 : {

        Aumento = 6000000 * 0.11;
        Bonific = 2100000;
        Total = (6000000 + Aumento) + Bonific;

        if(Codigo == 2){
            console.log(` Empleado: ${Empleado} 
            \n Codigo del empleado: ${Codigo}
            \n Administrador de base de datos
            \n Salario: 6,000,000
            \n Aumento del 11%
            \n Bonificacion: 2,100,000
            \n Total a pagar ${Total}
            `)
        }
    }


    case 3 : {

        Aumento = 4500000 * 0.12;
        Bonific = 1575000;
        Total = (4500000 + Aumento) + Bonific;

        if(Codigo == 3){
            console.log(` Empleado: ${Empleado} 
            \n Codigo del empleado: ${Codigo}
            \n Analista
            \n Salario: 4,500,000
            \n Aumento del 12%
            \n Bonificacion: 1,575,000
            \n Total a pagar ${Total}
            `)
        }
    }


    case 4 : {

        Aumento = 3000000 * 0.15;
        Bonific = 1050000;
        Total = (3000000 + Aumento) + Bonific;

        if(Codigo == 4){
            console.log(` Empleado: ${Empleado} 
            \n Codigo del empleado: ${Codigo}
            \n Desarrollador Frontend
            \n Salario: 3,000,000
            \n Aumento del 15%
            \n Bonificacion: 1,050,000
            \n Total a pagar ${Total}
            `)
        }
    }


    case 5 : {

        Aumento = 3500000 * 0.14;
        Bonific = 1225000;
        Total = (3500000 + Aumento) + Bonific;

        if(Codigo == 5){
            console.log(` Empleado: ${Empleado} 
            \n Codigo del empleado: ${Codigo}
            \n Desarrollador Backend
            \n Salario: 3,500,000
            \n Aumento del 14%
            \n Bonificacion: 1,225,000
            \n Total a pagar ${Total}
            `)
        }
    }


    case 6 : {

        Aumento = 4000000 * 0.15;
        Bonific = 1400000;
        Total = (4000000 + Aumento) + Bonific;

        if(Codigo == 6){
            console.log(` Empleado: ${Empleado} 
            \n Codigo del empleado: ${Codigo}
            \n Desarrollador Fullstack
            \n Salario: 4,000,000
            \n Aumento del 15%
            \n Bonificacion: 1,400,000
            \n Total a pagar ${Total}
            `)
        }
    }
}