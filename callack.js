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