//Diapositiva 64

//Ejercicio Operadores


//1. Determinar cuál de los dos elementos de texto es mayor

var valores = [true, 5, false, "hola", "adios", 2];
var texto1 = valores.slice(3,4);
var texto2 = valores.slice(4,5);

if (texto1 > texto2){
  console.log("el texto mayor es " + texto1);
}
else{
  console.log("el texto mayor es " + texto2);
}



//2. Utilizando exclusivamente los dos valores booleanos del array, determinar los operadores necesarios para obtener un resultado true y otro resultado false

var valores = [true, 5, false, "hola", "adios", 2];
var valor1 = valores.slice(0,1);
var valor2 = valores.slice(2,3);

resultado1 = valor1 || valor2;
resultado2 = valor1 && valor2;

console.log(resultado1);
console.log(resultado2);



//3. Determinar el resultado de las cinco operaciones matemáticas realizadas con los dos elementos numéricos

var valores = [true, 5, false, "hola", "adios", 2];

var numero1 = valores[1];
var numero2 = valores[5];

console.log(numero1+numero2); 
console.log(numero1-numero2); 
console.log(numero1*numero2);
console.log(numero1/numero2); 
console.log(numero1%numero2);

console.log(numero2+numero1); 
console.log(numero2-numero1); 
console.log(numero2*numero1);
console.log(numero2/numero1); 
console.log(numero2%numero1);
