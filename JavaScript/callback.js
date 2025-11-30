//Asynchronous Programming

console.log("start")
setTimeout(
    function fun() {
        console.log("Now executing timeout function");
    }, 3000
)
console.log("End")

/*
A callback is a function that is passed into another function as an argument and is executer 
insite the outer function to complete its execution
*/

function load(src, callback){
    let script= document.createElement('script')
    script.src= src
    script.onload=()=>callback(src)
    script.onerror=()=>callback("Error hae")
    document.head.append(script);
}
function hello(msg){
    console.log("hello from bhagwaan !"+ msg);
}
load("https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js", hello);