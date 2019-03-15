const request = require('request');

const formData = {
  // Pass a simple key-value pair
  my_field: 'my_value',
  // Pass data via Buffers
  my_buffer: Buffer.from([1, 2, 3]),
  // Pass data via Streams

  // Pass optional meta-data with an 'options' object with style: {value: DATA, options: OPTIONS}
  // Use case: for some types of streams, you'll need to provide "file"-related information manually.
  // See the `form-data` README for more information about options: https://github.com/form-data/form-data

};

request.post({
  url: 'http://localhost:3000/?a=b',
  proxy: 'http://localhost:8080',
  formData
}, (err, res, body) => {
  console.log(err)
  console.log(res)
  console.log(body)
})

/*const http = require('http');
const net = require('net');
const url = require('url');


// make a request to a tunneling proxy
const options = {
  port: 8080,
  hostname: 'localhost',
  method: 'GET',
  path: 'www.google.com:80'
};

const req = http.request(options, (err, res, body) => {
  console.log(err, res, body)
});*/
/*
req.end();

req.on('connect', (res, socket, head) => {
  console.log('got connected!');

  // make a request over an HTTP tunnel
  socket.write('GET / HTTP/1.1\r\n' +
    'Host: www.google.com:80\r\n' +
    'Connection: close\r\n' +
    '\r\n');
  socket.on('data', (chunk) => {
    console.log(chunk.toString());
  });
});
*/
