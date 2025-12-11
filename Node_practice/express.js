/*const http= require('http');----> not required*/
const express= require('express');
const app=express();
app.use('/',(req, res, next)=>{
   console.log(req.url, req.method);
   res.send('<h1>New page</h1>')
});
app.use('/tab',(req, res, next)=>{
    res.send('<p> Welcome to express tab</p>')
});
app.use('/second',(req, res, next)=>{
    res.send('<p> Welcome to express second</p>')          //calling res.send() implicitly calls res.end()
});
app.listen(4009, ()=>{
    console.log("server ban gaya!!!");
})    


//commit
