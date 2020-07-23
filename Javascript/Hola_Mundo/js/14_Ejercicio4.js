'use strict'
/* mostrar todos los numeros inpares que hay entre dos numero introducidos*/

var numero1 = parseInt(prompt("Digite el Primer Numero", 0))
var numero2 = parseInt(prompt("Digite el Segundo Numero", 0))

while (numero1 <= numero2) {

    numero1++;

    if (numero1 % 2 != 0) {
        console.log("El " + numero1 + " es Impar")
    }

}