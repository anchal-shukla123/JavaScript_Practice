 const http = require('http');
 const server = http.createServer((req, res)=> {
    console.log(req.url, req.method, req.headers);
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>My Title</title></head>');
    res.write('<body><h1>Hello</h1></body>');
    res.write('</html>');
    res.end();
 });
 server.listen(4005, ()=>{
   console.log("server running on port 4005");

 });