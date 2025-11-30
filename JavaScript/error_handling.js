let a=10;
if(a==10){
    console.log(a);
}
try{
    console.log(arr);
}
catch(err){
    console.log(err);
}
function fun1(){
    try{
        setTimeout(()=>{
            console.log("nums"  )//try block does not work in async functions
        },2000)
        return
    }
    catch(error){
        console.log("Error mil gaye");
    }
    finally{
        console.log("this is finally");
    }
}
fun1();
console.log("hello");