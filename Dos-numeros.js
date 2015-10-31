//FUNCIONES 1


console.log("introduce el primer número");
var numero1 = prompt();
console.log("introduce el segundo número");
var numero2 = prompt();


function max() {
if (numero1 > numero2) {
    console.log("el número mayor es " + numero1);
} 
else if (numero2 > numero1) {
    console.log("el número mayor es " + numero2);
} 
else if (numero1 == numero2) {
    console.log("los números son iguales");
} 
}

max();

