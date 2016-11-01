var Mates=require('./matematica'); //nombre con el que vamos a exportar / ubicación del modulo
var num1=24;
var num2=35;

var calc=new Mates(); //creamos el objeto para utilizar las funciones de Mates

calc.suma(num1,num2); //importante que los nombres de las funciones coincidan (EXERCICI 2 Y INDEX JS)

calc.resta(num1,num2);

calc.dividir(num1,num2);

calc.multiplicar(num1,num2);

calc.pi();

console.log(calc.PI);

console.log();
