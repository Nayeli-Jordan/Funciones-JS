//FUNCIONES 2


console.log("introduce el primer número");
var numero1 = prompt();
console.log("introduce el segundo número");
var numero2 = prompt();
console.log("introduce el tercer número");
var numero3 = prompt();


function max() {
if (((numero1 > numero2) || (numero1 == numero2)) && ((numero1 > numero3) || (numero1 == numero3))) {
    console.log("el número mayor es " + numero1);
} 
else if (((numero2 > numero1) || (numero2 == numero1)) && ((numero2 > numero3) || (numero2 == numero3))) {
    console.log("el número mayor es " + numero2);
} 
else if (((numero3 > numero1) || (numero3 == numero1)) && ((numero3 > numero2) || (numero3 == numero2))) {
    console.log("el número mayor es " + numero3);
} 
}

max();
