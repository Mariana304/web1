//Por buenas practicas todas las funciones se realizan al inicio y se llaman en la parte de abajo

//*********************************ZONA DE FUNCIONES***************************
//funcion saludar que tiene parametros y no devuelve ningun dato


function Greet(){
    console.log("Hola :D");

}

//Funcion con un parametro de entrada y no devuelve ningun dato
function GreetName(userName){
    console.log(`Hola ${userName}... Como estas?`);


}


function Suma(Nro1, Nro2){
    let suma = Nro1 + Nro2
    console.log(`La suma de ${Nro1} + ${Nro2} = ${suma}`);

}


//Funcion con dos parametros y devuelve la suma
function sumando(Nros1, Nros2){
    let suma = Nros1 + Nros2
    return suma; //return solo devuelve un dato


}

//otra forma de hacerlo ahorrandome linas ya que le doy la indicacion directamente en el return
function otrosumando(Nro1, Nro2){
    return Nro1 + Nro2; //return solo devuelve un dato


}



//*********************************LLAMAR FUNCIONES*****************************

console.log("la suma es: " + sumando(5,6));
console.log("la suma es: " + otrosumando(50,60));



/*GreetName("Santiago");
//Greet();

Suma(3,4)
//let nombre = prompt("ingrese su nombre")
//GreetName (nombre)*/