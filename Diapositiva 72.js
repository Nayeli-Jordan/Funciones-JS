//Diapositiva 72

//Completar las condiciones de los if del siguiente script para que los mensajes de los alert() se muestren siempre de forma correcta:



var numero1 = 5;
var numero2 = 8;

<!-- console.log("introduce el primer número");
 var numero1 = prompt();
 console.log("introduce el segundo número");
 var numero2 = prompt();  también se puede solicitar el número-->


if(numero1 < numero2){
  alert("numero1 no es mayor que numero2");
}
if(numero2 > 0){
  alert("numero2 es positivo");
}
if(numero1 < 0){
  alert("numero1 es negativo o distinto de cero");
}
if((numero1 + 1) !== numero2){
  alert("incrementar en 1 unidad el valor de  numero1 no lo hace mayor o igual que numero2");
}