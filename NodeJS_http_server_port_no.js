const http = require('http');

const PORT = 10000;

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('hello world, this is my Node.js server\n');
});
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
