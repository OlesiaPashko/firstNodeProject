/*var httpProxy = require('http-proxy');
var http = require('http');
var proxy = new httpProxy.createProxyServer({
  target: {
    host: 'localhost',
    port: 9015
  }
});
var proxyServer = http.createServer(function (req, res) {
  proxy.web(req, res);
});
 
//
// Listen to the `upgrade` event and proxy the
// WebSocket requests as well.
//
proxyServer.on('upgrade', function (req, socket, head) {
  proxy.ws(req, socket, head);
});
 
proxyServer.listen(8015);*/

/*var http = require('http'),
    httpProxy = require('http-proxy');
 
//
// Create a proxy server with latency
//
var proxy = httpProxy.createProxyServer();
 
//
// Create your server that makes an operation that waits a while
// and then proxies the request
//
http.createServer(function (req, res) {
  // This simulates an operation that takes 500ms to execute
  setTimeout(function () {
    proxy.web(req, res, {
      target: 'http://localhost:9008'
    });
  }, 500);
}).listen(8008);
 
//
// Create your target server
//
http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write('request successfully proxied to: ' + req.url + '\n' + JSON.stringify(req.headers, true, 2));
  res.end();
}).listen(9008);*/