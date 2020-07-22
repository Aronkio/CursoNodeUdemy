'use strict'

//programa que pida 2 numeros y que nos diga cual es el mayor, menor o igual
//PLUS si los datos ingresados son menores a 0 o son caracteres.

var numero1 = parseInt(prompt("Ingrese el Primer Numero", 0))
var numero2 = parseInt(prompt("Ingrese el Segundo Numero", 0))
    /*var resultado

    switch (numero1) {
        case (numero1 > numero2):
            resultado = "El Primer Numero Mayor" + numero1;
            break;
        case (numero1 < numero2):
            resultado = "El Segundo Numero es Mayor" + numero2;
            break;
        case (numero1 == numero2):
            resultado = "Ambos Numero son iguales" + numero1 + numero2;
            break;

        default:
            break;
    }
    console.log(resultado);*/

/*if (numero1 > numero2) {
    alert("El Primer Numero Mayor " + numero1)

} else if (numero1 < numero2) {
    alert("El Segundo Numero Mayor " + numero2)
} else {
    alert("Los Numero son Iguales")
}*/

// con un while

while (numero1 <= 0 || numero2 <= 0 || isNaN(numero1) || isNaN(numero2)) {
    numero1 = parseInt(prompt("Ingrese el Primer Numero", 0))
    numero2 = parseInt(prompt("Ingrese el Segundo Numero", 0))

}

if (numero1 == numero2) {
    alert("LOS NUMEROS SON IGUALES")
} else if (numero1 > numero2) {
    alert("EL NUMERO MAYOR ES " + numero1)
    alert("EL NUMERO MENOR ES " + numero2)
} else if (numero1 < numero2) {
    alert("EL NUMERO MAYOR ES " + numero2)
    alert("EL NUMERO MENOR ES " + numero1)
} else {
    alert("INGRESA LOS NUMERO CORRECTOS PELOTUDO")
}