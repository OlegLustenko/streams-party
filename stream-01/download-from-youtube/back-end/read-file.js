const http = require('http');
const fs = require('fs');

http.createServer((req, response) => {
  const fileStream = fs.createReadStream('./big-file'); // 16k

  response.end('HELLO WORLD');
}).listen(2000);