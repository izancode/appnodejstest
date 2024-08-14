const http = require("http");
const fs = require("fs");
const PORT = 2000;
const hostname = "localhost";

const home = fs.readFileSync("./index.html", "utf-8");

const server = http.createServer((req, res, next) => {
  console.log(req.url);
  if (req.url === "/") {
    return res.end(home);
  }
  if (req.url === "/about") {
    return res.end("<h1>about</h1>");
  }
  if (req.url === "/contact") {
    return res.end("<h1>contact</h1>");
  }
  if (req.url === "/services") {
    return res.end("<h1>servicess</h1>");
  } else {
    return res.end("<h1>$040 not found</h1>");
  }
});

server.listen(PORT, hostname, () => {
  console.log(`Server is working http://${hostname}:${PORT}/`);
});
