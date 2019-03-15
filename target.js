const http = require('http')
const request = require('request')

http.createServer((req, res) => {
  console.log(req)
  res.end('OK');
}).listen(3000)
