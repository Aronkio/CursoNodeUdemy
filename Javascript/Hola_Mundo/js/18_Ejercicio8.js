'use strict'
/* una calculadora con dos numeros digitados si ingresamos uno mal que nos vuelva a pedir
y que nos muestre por pantalla, alert y consola el resultado de + * / -*/

var numero1 = parseInt(prompt("Digite el Primer Numero", 0));
var numero2 = parseInt(prompt("Digite el Segundo Numero", 0));

while (isNaN(numero1) || isNaN(numero2) || numero1 <= 0 || numero2 <= 0) {
    numero1 = parseInt(prompt("Digite el Primer Numero", 0));
    numero2 = parseInt(prompt("Digite el Segundo Numero", 0));
}
var resultado = ("La suma es " + (numero1 + numero2) + "</br>" +
        "La Resta es " + (numero1 - numero2) + "</br>") +
    "La Multiplicacion es " + (numero1 * numero2) + "</br>" +
    "La Divicion es " + (numero1 / numero2 + "</br>")

var resultado2 = ("La suma es " + (numero1 + numero2) + "\n" +
        "La Resta es " + (numero1 - numero2) + "\n") +
    "La Multiplicacion es " + (numero1 * numero2) + "\n" +
    "La Divicion es " + (numero1 / numero2 + "\n")

document.write(resultado)
alert(resultado2)
console.log(resultado2)