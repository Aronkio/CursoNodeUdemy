'use strict'

//funciones anonimas
// es una funcion que no tiene nombre

var pelicula = function(nombre) {
    return "La Pelicula es: " + nombre;

}

//callback

function sumame(numero1, numero2, sumaYmuestra, sumaPordos) {
    var sumar = (numero1 + numero2)
    sumaYmuestra(sumar);
    sumaPordos(sumar);

    return sumar;
}

sumame(5, 6, function(dato) {
    console.log("la suma es: ", dato)
}, function(dato) {
    console.log("el resultado por x2 es: ", (dato * 2))

})

//console.log(sumame(2, 5))