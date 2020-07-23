'use strict'
/*que no diga si un numero es inpar o par
1. Ventana Promt
2. Si no es valida que nos pida de nuevo el numero
*/

var numero = parseInt(prompt("Ingrese el Primer Numero", 0));
while (isNaN(numero)) {

    numero = parseInt(prompt("Ingrese el Primer Numero", 0));
}
if (numero % 2 != 0) {

    alert("El Numero " + numero + " es Inpar");

} else {

    alert("El Numero " + numero + " es Par");
}