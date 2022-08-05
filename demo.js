const http = require("http");
const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  const numStr = [];
  for (let i = 0; i <= 100; i++) {
    numStr[i] = "\n" + i;
  }

  res.end("Number 1 to 100 :\n" + numStr);

});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});