const http = require('http');
// Load built-in `url` module
const url = require('url');

const server = http.createServer(function(request,response) {
  // Convert the request URL into an object. This converts the request url into its component parts.
  const parsed = url.parse(request.url);
  console.log(parsed);

  if (parsed.path === '/' || parsed.path === `/index.html`) {
    response.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
    response.end(`<h1>Index</h1>`);
  }
  
   else if (parsed.path === '/contact' || parsed.path === `/contact/index.html`) {
    response.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
    response.end(`<h1>Contact</h1>`);
  }

   else if (parsed.path === '/team' || parsed.path === `/team/index.html`) {
    response.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
    response.end(`<h1>Team</h1>`);
  }

   else if (parsed.path === '/products' || parsed.path === `/products/index.html`) {
    response.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
    response.end(`<h1>Product</h1>`);
  }

  else if (parsed.path === '/gallery' || parsed.path === `/gallery/index.html`) {
    response.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
    response.end(`<h1>Gallery</h1>`);
  }
  
  else {

    status = 404;
    body = '<h1> Page not found</h1>'

  }
  
  response.writeHead(404, {"Content-Type": "text/html; charset=utf-8"});
  response.end(`<h1>Page Not Found</h1>`);
});

server.listen(8080, function() {
    console.log(`Listening on port 8080`);
});