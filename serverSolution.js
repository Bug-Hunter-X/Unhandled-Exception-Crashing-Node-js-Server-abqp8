const http = require('http');

const server = http.createServer((req, res) => {
  try {
    if (req.url === '/error') {
      throw new Error('Something went wrong!');
    }
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World!');
  } catch (err) {
    console.error('Error:', err);
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Internal Server Error');
  }
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});