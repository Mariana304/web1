/*Elabora un algoritmo que le muestre alusuario el dinero que puede ahorrar en un año. El usuario ingresara su salario mensual, monto de los ingresos extras mensuales y el valor de gastos mensuales*/


let SalaryMen, IngresoExt, Gastos, IngresoTotalM, AhorrosM, IngTotalA, AhorrosA;

SalaryMen = 1200000
IngresoExt = 150000
Gastos = 930000;

IngresoTotalM = SalaryMen + IngresoExt;
AhorrosM = IngresoTotalM - Gastos;
IngTotalA = IngresoTotalM * 12;
AhorrosA = AhorrosM * 12;



console.log(`Ingreso mensual total ${SalaryMen}
\nMonto de los ingresos extras mensuales ${IngresoExt} 
\nGastos mensuales ${Gastos}
\nTotalde ahorro de un año ${AhorrosA}`);



