const http = require('http');

const server = http.createServer(function(request, response){
  //  RUN SOME CODE WHEN A REQUEST IS RECEIVED FROM THE BROWSER.
  console.log('request received.');
  
  response.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});

  response.end(`<h2>Hello Shizu-san!!</h2>`);

});

server.listen(8000, function(){
  console.log('everything is working, server listening to port 8000');
});