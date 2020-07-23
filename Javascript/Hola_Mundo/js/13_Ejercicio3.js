'use strict'
/* hacer un programa que muestre todos los numeros introducidos entre dos datos ingresados*/

var numero1 = parseInt(prompt("Introduce el Primer Digito", 0))
var numero2 = parseInt(prompt("Introduce el Segundo Digito", 0))

document.write("<h1>De " + numero1 + " a " + numero2 + " estan estos numeros: </h1>")
for (let i = numero1; i <= numero2; i++) {

    document.write(i + "<br>")

    //alert("Los numero entre estos son " + i)

}