const http = require('http')

const hostname = '127.0.0.1'
const port = 3000

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  var Arrow = () => {

    return "This example shows the syntax of an Arrow Function";
  }
  res.end(Arrow());

});

server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`)
});