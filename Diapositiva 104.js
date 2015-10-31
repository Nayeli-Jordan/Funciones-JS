//Diapositiva 104

//Encuentra el mail de una coder:


    var julia = {
        nombre: "Julia",
        ciudad:"Lima",
        email:"julia@lima.la",
        edad:24
    };
    var constanza = {
        nombre:"Constanza",
        ciudad:"Santiago",
        email:"constanza@santiago.la",
        edad:19
    };
    var claudia = {
        nombre:"Claudia",
        ciudad:"Mexico",
        email:"caudia@mexico.la",
        edad:17
    };
    var juana = {
        nombre:"Juana",
        ciudad:"Arequipa",
        email:"juana@arequipa.la",
        edad:21
    };

var nombrecoder = prompt();

function email() {
if(nombrecoder == "julia"){
alert("Email " + julia.email);
}
else if(nombrecoder == "constanza"){
  alert("Email " + constanza.email);
}
else if(nombrecoder == "claudia"){
  alert("Email " + claudia.email);
}
else if(nombrecoder == "juana"){
  alert("Email " + juana.email);
}
}

email();





//Agrega dos coders nuevas al arreglo “coders”. Una al principio del arreglo y otra al final del arreglo.

var coders = [
    {
        nombre: "Julia",
        ciudad:"Lima",
        email:"julia@lima.la",
        edad:24
    },
    {
        nombre:"Constanza",
        ciudad:"Santiago",
        email:"constanza@santiago.la",
        edad:19
    },
    {
        nombre:"Claudia",
        ciudad:"Mexico",
        email:"caudia@mexico.la",
        edad:17
    },
    {
        nombre:"Juana",
        ciudad:"Arequipa",
        email:"juana@arequipa.la",
        edad:21
    }];

var primero = coders.unshift({
        nombre: "Ana",
        ciudad:"Lima",
        email:"ana@lima.la",
        edad:25
    });

var primero = coders.push({
        nombre:"Laura",
        ciudad:"Mexico",
        email:"laura@santiago.la",
        edad:18
    });

console.log(coders);





//Escribe una función en la que el usuario ingrese el nombre de una coder y le devuelva el email de esa coder.

    var julia = {
        nombre: "Julia",
        ciudad:"Lima",
        email:"julia@lima.la",
        edad:24
    };
    var constanza = {
        nombre:"Constanza",
        ciudad:"Santiago",
        email:"constanza@santiago.la",
        edad:19
    };
    var claudia = {
        nombre:"Claudia",
        ciudad:"Mexico",
        email:"caudia@mexico.la",
        edad:17
    };
    var juana = {
        nombre:"Juana",
        ciudad:"Arequipa",
        email:"juana@arequipa.la",
        edad:21
    };

var nombrecoder = prompt();

function email() {
if(nombrecoder == "julia"){
alert("Su email es " + julia.email);
}
else if(nombrecoder == "constanza"){
  alert("Su email es " + constanza.email);
}
else if(nombrecoder == "claudia"){
  alert("Su email es " + claudia.email);
}
else if(nombrecoder == "juana"){
  alert("Su email es " + juana.email);
}
}

email();





//Ayer fue el cumpleaños de Constanza, actualiza su edad.


    var julia = {
        nombre: "Julia",
        ciudad:"Lima",
        email:"julia@lima.la",
        edad:24
    };
    var constanza = {
        nombre:"Constanza",
        ciudad:"Santiago",
        email:"constanza@santiago.la",
        edad:19
    };
    var claudia = {
        nombre:"Claudia",
        ciudad:"Mexico",
        email:"caudia@mexico.la",
        edad:17
    };
    var juana = {
        nombre:"Juana",
        ciudad:"Arequipa",
        email:"juana@arequipa.la",
        edad:21
    };

console.log("Constanza cumplio años? introduce TRUE o FALSE");
var cumpleaños = prompt();

function cumple() {
if(cumpleaños == "true"){
var nuevaedad = (constanza.edad + 1);
alert("Constanza ahora tiene " + nuevaedad);
}
else if(cumpleaños == "false"){
  alert("Constanza aún tiene " + constanza.edad);
}
}

cumple();





//Por favor, corrige el mail de Claudia.

var emailclaudia = ("caudia@mexico.la");
emailclaudia = emailclaudia.replace("caudia@mexico.la", "claudia@mexico.la");

console.log("el email corregido de Claudia es " + emailclaudia);