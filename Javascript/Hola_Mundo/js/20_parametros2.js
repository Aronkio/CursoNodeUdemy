'use strict'
// parametros  rest y spread
function listadofruta(fruta1, fruta2, ...resto_de_frutas) {
    console.log("Fruta 1: ", fruta1);
    console.log("Fruta 2: ", fruta2);
    console.log(resto_de_frutas);
    console.log("************************");
}

listadofruta("Naranja", "Manzana", "Pera", "Kiwi", "Sandia", "Jocote");

//Spread
var frutas = ["Naranja", "Manzana"];
listadofruta(...frutas, "Pera", "Kiwi", "Sandia", "Jocote");