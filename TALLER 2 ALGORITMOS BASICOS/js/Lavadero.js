/* Se desea un programa que muestre el dinero realizado por cada tipo de vehiculo (taxis,buses,particulares y motos) y el total realizado en el lavadero. El precio de los taxis es de $3000, los buses a $10000, los particulares a $5000 y las motos a $2000*/

let taxis, buses, particulares, motos, TotalTax, TotalBus, TotalPart, TotalMot, Neto;

taxis = 3000;
buses = 10000;
particulares = 5000;
motos = 2000;

TotalTax = taxis * 8;
TotalBus = buses * 4;
TotalPart = particulares * 11;
TotalMot = motos * 15;

Neto = TotalTax + TotalBus + TotalPart + TotalMot;



console.log(`Total taxi ${TotalTax}
\nTotal bus ${TotalBus}
\nTotal particular ${TotalPart}
\nTotal Moto ${TotalMot}
\nGanancia neta ${Neto} `)

