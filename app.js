// Problem: We need a simple way to look at a user's badge count and JavaScript points from a web browser.
// Solution: Use Node.js to perform the profile look ups and serve our templates via HTTP

// 1.  Create a web server
var http = require('http');
http.createServer(function (request, response) {
  homeRoute(request, response);
}).listen(3000, '127.0.0.1');
console.log('Server running at http://127.0.0.1:3000/');
// 2.  Handle the HTTP route GET / and POST / i.e. Home
function homeRoute(request, response) {
  // if the url == "/" && GET
  if (request.url === "/") {
    // show search field
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.write("Header\n");
    response.write("Search\n");
    response.write("Footer\n");
  }
  // if the url == "/" && POST
  // redirect to /:username
}
// 3.  Handle the HTTP route GET /:username i.e. /chalkers
// 4.  Function that handles the reading of files to the templates that we have and merge in values.  