'use strict'

//Condicionales
// Estructuras de control
// si A es igual al B has algo

var edad1 = 50;
var nombre = "Andres Ronquillo";

/* if(edad1 > edad2){

	console.log("Edad1 es mayor que edad2");

} else{
	console.log ("Edad1 es inferior a Edad2");
}*/
/* operadore relacionales
	mayor >
	menor <
	Mayor o igual >=
	menor o igual <=
	Igual ==
	distintto !=
	*/

if (edad1 >= 18) {
    console.log(nombre + " tiene " + edad1 + " anio, es mayor de edad");

    if (edad1 <= 33) {
        console.log("Todavia le haces ganas animo");
    } //else {
    //console.log("Estas pal tigre amigo");
    //}
    else if (edad1 >= 70) {
        console.log("Perteneces a la tercera edad");

    } else {
        console.log("Ya no eres patojo");

    }

} else {
    console.log(nombre + " tiene " + edad1 + " anios, es menor de edad corra")


}

/* operadores logicos
AND (Y): &&
OR (O):||
Negacion : !
*/

//negacion
var year = 2028;

if (year != 2016) {
    console.log(" El anio no es 2016 realmente es" + year);
}
// AND
if (year >= 2000 && year <= 2020 && year != 2018) {
    console.log("Estamos en la era moderna")
} else {
    console.log("Estamos en la era post moderna")
}
// Or
if (year == 2008 || (year >= 2018 && year == 2028)) {
    console.log("El anio acaba en 8")

} else {
    console.log("Anio no Registrado")
}