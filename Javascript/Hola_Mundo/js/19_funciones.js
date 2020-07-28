'use strict'

//Funciones
//Es una grupacion de instrucciones reutilizables
//defino la funcion
function porconsola(numero1, numero2) {
    console.log("Suma " + (numero1 + numero2));
    console.log("Resta " + (numero1 - numero2));
    console.log("Multiplicacion " + (numero1 * numero2));
    console.log("Divicion " + (numero1 / numero2));
    console.log("*******************************")
}

function porpantalla(numero1, numero2) {
    document.write("Suma " + (numero1 + numero2) + "<br>");
    document.write("Resta " + (numero1 - numero2) + "<br>");
    document.write("Multiplicacion " + (numero1 * numero2) + "<br>");
    document.write("Divicion " + (numero1 / numero2) + "<br>");
    document.write("*******************************" + "<br>")
}

function calculadora(numero1, numero2, mostrar = false) {
    //conjunto de instrucciones
    //return "hola soy la calculadora";

    if (mostrar == false) {

        /*console.log("Suma " + (numero1 + numero2));
        console.log("Resta " + (numero1 - numero2));
        console.log("Multiplicacion " + (numero1 * numero2));
        console.log("Divicion " + (numero1 / numero2));
        console.log("*******************************")*/
        porconsola(numero1, numero2);
    } else {
        porpantalla(numero1, numero2);

        /*document.write("Suma " + (numero1 + numero2) + "<br>");
        document.write("Resta " + (numero1 - numero2) + "<br>");
        document.write("Multiplicacion " + (numero1 * numero2) + "<br>");
        document.write("Divicion " + (numero1 / numero2) + "<br>");
        document.write("*******************************" + "<br>")*/
    }
    return true;

}

//console.log(calculadora(), calculadora(), calculadora())
//invocar o llamar
//calculadora(15, 8);
calculadora(10, 5, );
calculadora(6, 8, true);

/*for (let i = 1; i <= 10; i++) {
    console.log(i);
    calculadora(i, 8);


}*/