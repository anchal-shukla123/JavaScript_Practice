/*Hoisting in javascript is a behaviour in which the variable and function declaration 
conceptually move to the top of their respective scopes during the compilation phase, before
the code is executed. Thus you can use variables or call functions before they are explicitlly
decalred in your code */

//Example----

console.log(a)
var a

fun();
function fun(){
    console.log("this is function");
}

/*
Hoisting is done only using var and the variables are only declared . 
Variables are initialized only after they are assigned a value firstly in the code, 
hoisting only decalres the variables and functions.
*/