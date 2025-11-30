function myFirst(name){
   console.log(name);
   
}
function variableArg(...num){
    console.log(num)
}
variableArg(100, 200, 1000)

//this 

const obj1={
    name:"anchal",
    grade:"A",
    fun: function(){
        setTimeout(function(){
            console.log(this.name, this.grade);// under an event this points  to window object thus this line will return undefined values
          }, 2000)
    }
}
const obj2={
    name:"anchal",
    grade:"A",
    fun: function(){
        setTimeout(()=>{
            console.log(this.name, this.grade);// under an arrow function this points  to lexicale scope object, thus this line will return current object values
          }, 2000)
    }
}
obj2.fun();