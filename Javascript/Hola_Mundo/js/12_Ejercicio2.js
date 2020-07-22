'use strict'
/* utilizando un bucle, mostrar la suma y la media  de los numero
introducidos hasta ingresar un numero negativo y ahi mostrar el resultado*/

var suma = 0;
var contador = 0;

do {
    var numero = parseInt(prompt("Ingresa numeros hasta que ingreses un Negativo", 0));
    if (isNaN(numero)) {
        numero = 0;
    } else if (numero >= 0) {
        suma = suma + numero;
        //suma += numero;

        contador++;

        console.log(suma, contador);

    }
} while (numero >= 0) {
    alert("La Suma de los Datos es " + suma)
    alert("La Media de los datos es " + (suma / contador));
};