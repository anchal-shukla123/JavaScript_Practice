let name="anchal"     //block level scope
var name2="shashank"  //globally scoped
const name3= "divya"  //fixed value
console.log(name);  //anchal
console.log(name2); //shashank
console.log(name3); //divya

{
    let name4= "diksha" 
    var name5= "Jiya"
}

console.log(name5); // returns Jiya as var is globally scoped
var name2="akshat"  
console.log(name2)  //return akshat 

/*
console.log(name4) throw error becoz it is not declared here, only declared in the block
name3="kavita"->console.log(name3) throws error, assignment to constant variable
let name="akshat" // gives error cannot re-declare block level variable
*/


/*
DATA TYPES IN JAVASCRIPT-----

* Primitive types-
-> Number
-> String
-> Symbol
-> Boolean
-> Bigint
-> null
-> Undefined

* Non Primitive types(Refernce types)-
-> Object
-> Array
-> Function

*/

let a=10;
let b="simran"
let c= Symbol("anchal")
let d
let e=true
let s={
    age: 10,
    Fname: "soham"
}
console.log([a, b, c, d, e, s])
console.log([typeof(a),typeof(b),typeof(c),typeof(d), typeof(e),typeof(null), typeof(s)]);
