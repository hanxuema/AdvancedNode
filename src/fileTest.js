var file = require('fs');

var url = require('url');
var adr = 'http://localhost:8080/default/abc/hahaha.htm?year=2017&month=february';
var q = url.parse(adr, true);

console.log(q.host); //returns 'localhost:8080'
console.log(q.path); //returns '/default/abc/hahaha.htm?year=2017&month=february'
console.log(q.pathname); //returns '/default/abc/hahaha.htm'
console.log(q.search); //returns '?year=2017&month=february'

 
file.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
    if (err) throw err;
    console.log('Saved!');

    var readMe = file.readFile("mynewfile1.txt","utf8",function (err,data) {
      if (err) {
        throw err;
      }
      // res.writeHead(200, {'Content-Type': 'text/html'});
      // res.write(data);
      // res.end();
      console.log("first", data);
    });

    
    var readMe = file.readFileSync("mynewfile1.txt","utf8",function (err,data) {
      if (err) {
        throw err;
      }
      console.log("inside",sreadMe);
    });
    
    console.log("second", readMe);
  });


  