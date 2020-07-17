'use strict'

//prueba con var
 var numero = 40;
	console.log(numero); //valor 50
 if (true) {
 	var numero = 50;
 	console.log(numero); //valor 50
 }
 console.log(numero); //valor 50

 // prueba con let

 var texto = "curso andres ronkio";
 console.log(texto); // valor curso

 if (true) {

 	let texto = "Curso Sql andres ronkio";
 	console.log(texto);// valor sql
 }
 console.log(texto); //valor sql