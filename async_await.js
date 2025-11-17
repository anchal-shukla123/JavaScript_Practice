//asyn ia a functions which returns a promise
async function fun(){
    return 7;
}
fun().then((x)=>{
    console.log(x);
})

async function weather(){
    let a= new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(21)
        }, 1000);
    })
    let b= new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(31)
        }, 3000);
    })
    console.log("fetching a");
    let val1= await a;
     console.log("fetched a");
     console.log("fetching b");
    let val2= await b;
     console.log("fetched d");
    return [val1, val2];
}
let ans= await weather();
console.log(ans);