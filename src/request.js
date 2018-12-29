const http = require("http");

var req = http.request(
  {
    hostname: "http://www.google.com"
  },
  (res) => {
    console.log(res.statusCode);
    console.log(res.headers);

    res.on('data', (data)=>{
        console.log(data.toString());
    })
  }
);

req.on("error", (e)=> console.log(e));
// req.end();
console.log(req.agent);
 