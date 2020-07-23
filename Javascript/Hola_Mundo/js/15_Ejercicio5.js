'use strict'
/* Programa que muestre todos los numeros digitados*/

var numero1 = parseInt(prompt("Digite el Primer Numero", 1))

document.write("<h1> Los Numeros divisores de " + numero1 + " son:</h1>")

for (let i = 1; i <= numero1; i++) {

    if (numero1 % i == 0) {

        document.write("Los Divisores son " + i + "<br>")
        console.log("Divisores " + i)


    }


}