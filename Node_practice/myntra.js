const http= require('http');
const server=http.createServer((req, res)=>{
     res.setHeader('Content-Type', 'text/html');
     res.write('<html>');
     res.write('<head><title>Myntra</title><style>body{margin:0;font-family:Arial,sans-serif}.navbar{display:flex;align-items:center;justify-content:space-between;padding:10px 30px;background:#fff;box-shadow:0 2px 5px rgba(0,0,0,0.1)}.logo{font-size:24px;font-weight:bold;color:#ff3e6c}.nav-links a{margin:0 15px;text-decoration:none;color:#000;font-weight:bold}.nav-links a:hover{color:#ff3e6c}</style></head>');
     res.write('<body>');
     res.write('<div class="navbar"><div class="logo">Myntra</div><div class="nav-links"><a href="/">Home</a><a href="/women">Women</a><a href="/men">Men</a><a href="/kids">Kids</a><a href="/cart">Cart</a></div></div>');
    res.write('<h1>Myntra Store</h1>')
     res.write('</body>');
    res.write('</html>');
    
     if(req.url==='/women'){
        res.write('<html>');
        res.write('<head><title>Products</title></head>');
        res.write('<body><h1>Womes Section</h1></body>');
        res.write('</html>');
        return res.end();
    }
    else if(req.url==='/men'){
        res.write('<html>');
        res.write('<head><title>Products</title></head>');
        res.write('<body><h1>Mens Section</h1></body>');
        res.write('</html>');
        return res.end();
    }
    else if(req.url==='/kids'){
        res.write('<html>');
        res.write('<head><title>Products</title></head>');
        res.write('<body><h1>Kids Section</h1></body>');
        res.write('</html>');
        return res.end();
    }
    else if(req.url==='/cart'){
        res.write('<html>');
        res.write('<head><title>Products</title></head>');
        res.write('<body><h1>Cart</h1></body>');
        res.write('</html>');
        return res.end();
    }
})
server.listen(4007, ()=>{
    console.log('server connected !!!!');
    console.log("server established!!")

})