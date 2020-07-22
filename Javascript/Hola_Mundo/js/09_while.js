'use strict'

var year = 2018;

while (year != 1991) {

    // ejecuta esto
    console.log("estas en el anio " + year)

    if (year == 2000) {
        break
    }

    year--;

}

// do while
var anios = 30;
do {
    alert("Solo cuando sea diferente a 20");
    anios--;
} while (anios > 25);