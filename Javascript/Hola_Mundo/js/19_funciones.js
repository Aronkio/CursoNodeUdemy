'use strict'

//Funciones
//Es una grupacion de instrucciones reutilizables
//defino la funcion
function calculadora(numero1, numero2) {
    //conjunto de instrucciones
    //return "hola soy la calculadora";
    console.log("Suma " + (numero1 + numero2));
    console.log("Resta " + (numero1 - numero2));
    console.log("Multiplicacion " + (numero1 * numero2));
    console.log("Divicion " + (numero1 / numero2));
    console.log("*******************************")
}

//console.log(calculadora(), calculadora(), calculadora())
//invocar o llamar
//calculadora(15, 8);
//calculadora(10, 5);

for (let i = 1; i <= 10; i++) {
    console.log(i);
    calculadora(i, 8);


}