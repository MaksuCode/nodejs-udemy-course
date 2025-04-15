const http = require("http");
const url = require("url");
const fs = require("fs");

// ? Why Sync reading ? Because we only need to read the file once on top.
const data = fs.readFileSync(`${__dirname}/data/data.json`, "utf-8");
const dataObject = JSON.parse(data);

const server = http.createServer((req, res) => {
  console.log(req.url);

  const pathName = req.url;

  switch (pathName) {
    case "/overview":
      res.end("This is OVERVIEW");
      break;
    case "/products":
      res.end("This is PRODUCTS");
    case "/api":
      res.writeHead(200, { "content-type": "application/json" });
      res.end(data);
      break;
    default:
      res.writeHead(404, {
        "content-type": "text/html",
        "my-custom-header": "hello world",
      });
      res.end("<h1>Page not found!</h1>");
      break;
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to requests on port 8000");
});
