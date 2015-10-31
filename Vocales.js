//FUNCIONES 3


console.log("Introduce una vocal");
var vocal = prompt();


function letra() {
if ((vocal === 'a') || (vocal === 'e') || (vocal === 'i') || (vocal === 'o') || (vocal === 'u')) {
    console.log(vocal + " es vocal");
} 
else if ((vocal != 'a') || (vocal != 'e') || (vocal != 'i') || (vocal != 'o') || (vocal != 'u')) {
    console.log(vocal + " es consonante");
} 
}
letra();

 
