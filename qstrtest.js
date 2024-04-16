var http = require('http');
var url = require('url');
var port = process.env.PORT || 3000;
//var port = 8080;   //uncomment to run local

http.createServer(function (req, res) {
   res.writeHead(200, {'Content-Type': 'text/html'});
   urlObj = url.parse(req.url,true)
   id = urlObj.query.id
   res.write("<h2>This is my query string appication</h2>");
   res.write ("The value of id is: " + id);
   res.end();
}).listen(port);
