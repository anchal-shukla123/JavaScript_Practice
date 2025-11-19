try{
    console.log(arr);
}
catch(err){
    console.log(err);
}
function fun(){
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
fun();

//dummy