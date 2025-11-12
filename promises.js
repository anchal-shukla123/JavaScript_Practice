//Promise is the promise of code execution . It has two components state and result 
//until the promise is completed its state is pending and result is undefined, as soon as
//the promise is completed its state becomes fulfilled which is either resolved 
//or rejected and result is returned through resolve, reject.

let q= new Promise(function (resolve, reject){
    setTimeout(()=>{
        console.log("time out function execeuted");
        resolve(100)
    }, 3000)
    reject(new Error())
});
p.then((value)=>{
    console.log(value)
});
p.catch((error)=>{
    console.log("Error occured !")
})


/*------PROMISE CHAINING-------*/
let p= new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log("First chain")
        resolve(100)
    }, 2000)
})
p.then((value)=>{
        setTimeout(()=>{
        console.log("first resolve", value);
        console.log("Second chain");
    }, 2000)
}).then((value)=>{
    setTimeout(()=>{
        console.log("second resolve", value);
        console.log("third chain");
        
    }, 2000)
})