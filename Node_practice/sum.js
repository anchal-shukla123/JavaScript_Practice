const sumHandler= (req, res)=>{
   const body=[];
   req.on('data', (chunk)=>{
     body.push(chunk);
   })
   
   req.on('end', ()=>{
   const ans=Buffer.concat(body).toString();
   const params= new URLSearchParams(ans);
   const data=Object.fromEntries(params);
   const val=Number(data.num1)+Number(data.num2);
   console.log(val);
   res.setHeader('Content-Type', 'text/html');
   res.write(`<html><head><title>Calculator</title></head><body><h1>Your Sum is ${val} </h1></body></html>`);

   })
} 
exports.sumHandler=sumHandler;
