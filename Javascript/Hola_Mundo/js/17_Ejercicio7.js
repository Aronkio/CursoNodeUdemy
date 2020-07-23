'use strict'
/* Tabla de Multiplicar introducido por pantalla*/
var numero = parseInt(prompt("Ingrese el Numero para la Tabla", 1));
while (isNaN(numero)) {

    numero = parseInt(prompt("Ingrese el Numero para la Tabla", 1));
}
document.write("<h1> La tabla del " + numero + "</h1>")
for (let i = 1; i <= 10; i++) {

    document.write(numero + " X " + i + " = " + (numero * i) + "<br>")

}

for (let c = 1; c <= 10; c++) {
    document.write("<h1> La tabla del " + c + "</h1>")
    for (let i = 1; i <= 10; i++) {

        document.write(c + " X " + i + " = " + (c * i) + "<br>")

    }

}