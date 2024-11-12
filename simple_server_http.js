var http = require("http");
// Create a server object
http.createServer(function (request, response) {
  res.write('Hello World!'); 
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('Hello World\n');
}).listen(3000);


