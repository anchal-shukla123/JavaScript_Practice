 const http = require('http');
 const server = http.createServer((req, res)=> {
    console.log(req.url, req.method, req.headers);
    if(req.url==='/'){
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>My Title</title></head>');
    res.write('<body><h1>Hello</h1></body>');
    res.write('</html>');
    return res.end();
    }
    else if(req.url==='/products'){
      res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>Products</title></head>');
    res.write('<body><h1>Products page</h1></body>');
    res.write('</html>');
    return res.end();
    }
    else{
      res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>others</title></head>');
    res.write('<body><h1>Others</h1></body>');
    res.write('</html>');
    res.end();
    }
 });
 server.listen(4008, ()=>{
   console.log("server running on port 4005");

 });