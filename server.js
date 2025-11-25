 const http = require('http');
 const fs=require('fs');
 const server = http.createServer((req, res)=> {
    console.log(req.url, req.method, req.headers);
    if(req.url==='/'){
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>My Title</title></head>');
    res.write('<body>');
    res.write('<h1>MY FORM</h1>');
    res.write('<form action="/submit-url" method="POST">');
    res.write('<input type="text" placeholder="Enter your name" name="username"><br/>');
    res.write('<input type="radio" value="Male" id="male" name="gender">');
    res.write('<label for="male">Male</label>')
    res.write('<input type="radio" value="Female" id="female" name="gender">');
    res.write('<label for="female">Female</label><br/>')
    res.write('<button type="submit">Submit</button>')
    res.write('</form>');
    res.write('</body>');
    res.write('</html>');
    return res.end();
    }
    else if(req.url.toLowerCase()==="/submit-url" && req.method=="POST"){
      fs.writeFileSync('user.txt', 'anchal shukla');
      res.statusCode= 302;
      res.setHeader('Location', '/');
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