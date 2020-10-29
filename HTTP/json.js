const http = require("http");

const server = http.createServer(function(request, response) {

  // Set MIME Type for the payload/body
  response.writeHead(200, {"Content-Type": "application/json; charset=utf-8"});  
  
  // Build an object using object literal syntax
  let dataObj = { id: 123, name: "Mandy Michael", email: "creativetext@example.com" };

  // Encode js object into JSON. This needed to send data over the Internet.
  let data = JSON.stringify(dataObj);

  // Fire the trigger; this sends the response and ends the session.
  response.end(data);
});

server.listen(8080, function() {
  console.log("Listening on port 8080");
});