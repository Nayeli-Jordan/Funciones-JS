//Diapositiva 102:


//Cómo representarías los siguientes datos en un objeto:
//Toyota, Corolla, 2015, Azul, Luis Perez, true, 30000
//Hamburguesa casera, 15 minutos, 4 porciones, pan, carne, tomate, lechuga, mayonesa, queso.



var miobjeto = {
  marca: "toyota",
  modelo: "carolla",
  año: 2015,
  color: "azul",
  nombre: "Luis Perez",
  seguro: true,
  precio: 30000,
  
 saludo: function(){
        console.log("Hola " + this.nombre + "tu auto es un " + this.marca);
    },
    comidasFavoritas: ["Hamburguesa casera", "15 minutos", "4 porciones", "pan", "carne", "tomate", "lechuga", "mayonesa", "queso"],  
};

miobjeto.saludo();


//---------------------------------------------------------------------------------------------------------------------------------

//Usando una combinación de Objetos y Arreglos. ¿Cómo guardarías la siguiente data?
//Compaq, 2005, Windows XP, 15 pulgadas, Vanesa Garcia
//HP, 2003, Linux, 13 pulgadas, Luisa Francia
//Sony, 2004, Windows 7, 14 pulgadas, Julia Fernandez
//Asus, 2002, Windows XP, 15 pulgadas, Vanesa Garcia
//Toshiba, 2008, Windows 10, 10 pulgadas, María Reyes
//


var computadoras = [
    {            
        marca:"Compaq",
        año:2005,
        procesador:"Windows XP",
        pulgadas:15,
        dueña:"Vanesa Garcia"
    },
    {
        marca:"HP",
        año:2003,
        procesador:"Linux",
        pulgadas:13,
        dueña:"Luisa Francia"
    },
    {          
        marca:"Sony",
        año:2004,
        procesador:"Windows 7",
        pulgadas:14,
        dueña:"Julia Fernandez"
        
    },
    {         
        marca:"Asus",
        año:2002,
        procesador:"Windows XP",
        pulgadas:15,
        dueña:"Vanesa Garcia"
     },
    {                  
        marca:"Toshiba",
        año:2008,
        procesador:"Windows 10",
        pulgadas:10,
        dueña:"María Reyes"
    },
    {                 
        marca:"Apple",
        año:2014,
        procesador:"OSX",
        pulgadas:13,
        dueña:"Fernanda Ramos"
    }];