//events are the actions or occurences that happen in the browser
let a= document.getElementById("text")
a.onclick=()=>{
    console.log("this is inside js")
}
/* if two tasks are defined for the same event, one in the html itself and other in 
 an exteral js file, then the one in exertnal js file will have  more priority */

 // an event listener is used to assign mutiple handlers to an event

a.addEventListener('click', fun1);
a.addEventListener('click', fun2);
let val=prompt("Enter 1 or 2");

function fun1(e){
    console.log(e);
    console.log(e.type);
    console.log(e.target);
    console.log(e.currentTarget); // same as target
    alert("hello :)")
    e.target.style="color: red";  // style manipulation
}
function fun2(){
    
    alert("good morning :)")

}
if(val==1){
    a.removeEventListener('click', fun2);
}
if(val==2){
    a.removeEventListener('click', fun1);
}
//commit
