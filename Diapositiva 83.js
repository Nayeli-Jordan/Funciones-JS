//Diapositiva 83


//Utilizando la estructura for, crear un script que calcule el factorial de un número entero.


var numero = prompt("Introduce un número y se mostrará su factorial");
var resultado = 1;
 
for(var i=1; i<=numero; i++) {
  resultado *= i;
}
console.log(resultado);