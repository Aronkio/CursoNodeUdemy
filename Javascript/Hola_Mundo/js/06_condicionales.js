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