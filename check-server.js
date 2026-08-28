/* eslint-disable @typescript-eslint/no-require-imports */
const http = require('http');

// Check if port 3000 is available
const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end('Port 3000 is available!\n');
});

server.listen(3000, '127.0.0.1', () => {
  console.log('✓ Port 3000 is available and working');
  console.log('✓ Server is listening on http://localhost:3000');
  server.close();
});

server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.log('✗ Port 3000 is already in use by another application');
    console.log('  Try running: npm run dev -- -p 3001');
  } else {
    console.log('✗ Error:', err.message);
  }
});
