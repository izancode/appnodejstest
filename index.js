const fs = require("fs");
const path = require("path");

const home = fs.readFileSync(path.resolve(__dirname, "index.html"), "utf-8");

module.exports = (req, res) => {
  console.log(req.url);

  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    return res.end(home);
  }

  if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/html" });
    return res.end("<h1>about</h1>");
  }

  if (req.url === "/contact") {
    res.writeHead(200, { "Content-Type": "text/html" });
    return res.end("<h1>contact</h1>");
  }

  if (req.url === "/services") {
    res.writeHead(200, { "Content-Type": "text/html" });
    return res.end("<h1>services</h1>");
  }

  res.writeHead(404, { "Content-Type": "text/html" });
  return res.end("<h1>404 not found</h1>");
};
