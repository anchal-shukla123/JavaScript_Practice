const {sumHandler}=require('./sum');
const http= require('http');
const server=http.createServer((req, res)=>{
    if(req.url==='/'){
    res.setHeader('Content-Type', 'text/html');
    res.write('<html><head><title>Home</title></head><body><h1>WELCOME TO CALCULATOR</h1><br/><a href="/calci"><button>Click me</button></a></body></html>')
    return res.end();
  }
    else if(req.url==='/calci'){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html><head><title>Calculator</title></head><body><h1>Calculate now</h1><br/><form action="/calculate-result" method="POST"><input placeholder="Enter first number", type="number", name="num1"></input><br/><input placeholder="Enter second number", type="number", name="num2"></input><br/><button type="submit">Sum</button></form></body></html>')
        return res.end();
    }
    else if(req.url==='/calculate-result' && req.method==="POST"){
        return sumHandler(req, res);
    }
})
server.listen(4005, ()=>{
    console.log("server done hai!!!");
})