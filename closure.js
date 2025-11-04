/*
Closure is a function that reatins access to its outer function even if the outer function has
 finished executing.
*/

//----Example----

function outer(){
    let msg="outer variable"
    function inner(){
        console.log(msg)
        msg="inner variable"
    }
    return inner;
}
let fun = outer();
fun();
fun();
fun();