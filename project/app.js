const express=require('express');
const app=express();
app.use((req, res, next)=>{
   res.send('<h1>Server index:)!!!</h1>')
})
app.listen(4010, ()=>{
    console.log('server chalu:)');
})