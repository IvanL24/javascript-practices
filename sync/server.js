
const http = require("http");
const fs = require('fs');

const server = http.createServer(function(request, response) {
  let json = '../HTTP/definitions.json';
  // Set MIME Type for the payload/body
  fs.readFile(json,function(error, data){
      if(error){
        response.writeHead(404, {'Content-type': 'text/html'});
        response.end('<h1>No such image</h1>');
      } else {
        response.writeHead(200, {'Content-type': 'application/json'});
        response.end(data);
      }
    });
    
});

server.listen(8080, function() {
  console.log("Listening on port 8080");
});
