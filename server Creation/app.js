const http = require("http");
const { readFileSync } = require("fs");

// get all files
const homePage = readFileSync("./templates/page.html");
const homeImage = readFileSync("./dota2.jpg");

const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === "/" || url === "/home") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(homePage);
    res.end();
  } else if (url === "/dota2.jpg") {
    res.writeHead(200, { "content-type": "image/jpg" });
    res.write(homeImage);
    res.end();
  } else {
    res.writeHead(404, { "content-type": "text/html" });
    res.write("<h1>page not found</h1>");
    res.end();
  }
});
server.listen(3000);
