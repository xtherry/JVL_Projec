const marked = require("marked");
const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

// Initializing marked library
    // Fix for A9 - Insecure Dependencies
marked.setOptions({
	sanitize: true
});
console.log(marked);
console.log(marked.options);
console.log(marked.defaults);
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

