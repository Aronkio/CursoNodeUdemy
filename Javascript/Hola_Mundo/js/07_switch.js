'use strict'
//Switch

var edad = 40;
var imprime = "";

switch (edad) {
    case 18:
        imprime = "Acabas de Cumplir 18";

        break;
    case 25:
        imprime = "Eres un Adulto";
        break;
    case 40:
        imprime = "Crisis de los 40";
        break;
    case 40:
        imprime = "Estas Vejito";
        break;
    default:
        imprime = "No estas en nada";
        break;
}
console.log(imprime);