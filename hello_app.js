var http = require('http');
var url = require('url');
var port = process.env.PORT || 3000;
//var port = 8080;   //uncomment to run local
console.log("This goes to the console window");
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
   res.write("<h2>This is my hello appication</h2>");
   res.write ("Success!  This app is deployed online");
   res.end();
  console.log('hey')
}).listen(port);
