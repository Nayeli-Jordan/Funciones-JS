//Diapositiva 74

//1. Escribe una función que suma todos los dígitos en un array y otra que multiplique todos los números de otra array.

var valores = [4, 5, 2, 6, 8, 2];

var numero1 = valores[0];
var numero2 = valores[1];
var numero3 = valores[2];
var numero4 = valores[3];
var numero5 = valores[4];
var numero6 = valores[5];

console.log(numero1+numero2+numero3+numero4+numero5+numero6); 
console.log(numero1*numero2*numero3*numero4*numero5*numero6); 



//2. Escribe una función que tome un string y lo devuelva reverso.

var animals = ["perro", "gato", "torutuga", "pez"];
animals.reverse();

console.log(animals);



//3. Escribe una función que tome como argumento una palabra y devuelva la palabra escrita en reversa. 

var cadena = "palabra",
    separador = "",
    arregloDeSubCadenas = cadena.split(separador);
    arregloDeSubCadenas.reverse();

console.log(arregloDeSubCadenas);



//4. Escribe una función que tome como argumento un array de palabras y devuelva la que tiene mayor longitud.

var mensaje = "Hola mundo";
var palabras = mensaje.split(" ");

console.log(palabras);


var palabra1 = palabras[0].length;
var palabra2 = palabras[1].length;

if (palabra1 > palabra2){
  console.log("la palabra mas larga tiene " + palabra1 + " caracteres y es Hola");
}
else{
  console.log("la palabra mas larga tiene " + palabra2 + " caracteres y es mundo");
}