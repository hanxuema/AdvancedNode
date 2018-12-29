const server  = require('http');

server.on('request', (req, res)=>{
    res.writeHead(200, {'content-type': 'text/plain'});
    res.write('hello world\n');
    res.write('hello world\n');
    res.write('hello world\n');

    setTimeout(function () {
        res.write("Another Hello world\n");
    }, 1000);
    
    setTimeout(function () {
        res.write("Yet Another Hello world\n");
    }, 2000);

    setTimeout(function () {
        res.end("End yet Another Hello world\n");
    }, 3000);

});


server.timeout = 1000;
server.listen(8000);