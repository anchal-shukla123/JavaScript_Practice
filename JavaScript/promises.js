//Promise is the promise of code execution . It has two components state and result 
//until the promise is completed its state is pending and result is undefined, as soon as
//the promise is completed its state becomes fulfilled which is either resolved 
//or rejected and result is returned through resolve, reject.

let q= new Promise(function (resolve, reject){
    setTimeout(()=>{
        console.log("time out function execeuted");
        resolve(100)
    }, 3000)
});
q.then((value)=>{
    console.log(value)
});
q.catch((error)=>{
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
        return new Promise((resolve, reject)=>setTimeout(()=>{
        console.log("first resolve", value);
        console.log("Second chain");
        resolve(200);
    }, 2000))
}).then((value)=>{
    return new Promise((resolve, reject)=>setTimeout(()=>{
        console.log("second resolve", value);
        console.log("third chain");
        resolve(300);
    }, 2000))
}).then((value)=>{
    console.log(value);
})


/*--------MULTIPLE HANDLERS---------- */
let r= new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log("Promise is resolved")
        resolve(100)
    },4000)
})
r.then(()=>{
    console.log("Handler1")
})
r.then(()=>{
    console.log("Handler2")
})
r.then(()=>{
    console.log("Handler3")
})
// All these handlers will simultaneously run

/*-----------PROMISE API-----------*/
let s=Promise.all([p, q, r])
s.then(()=>{
    console.log("Final Promise")
});