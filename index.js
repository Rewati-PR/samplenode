const http = require("http");
const fs = require("fs");

const home = fs.readFileSync('./index.html',"utf-8");

console.log(__dirname);

const server = http.createServer((req, res) => {
  if (req.url === "/") return res.end(home);
   if (req.url === "/about") {
   return res.end("<h1>About Page</h1>");
  }
  if (req.url === "/contact") return res.end("<h1>Contact Page</h1>");
 if (req.url === "/service") return res.end("<h1>Service Page</h1>");
  else{
    return res.end("<h1>404 Page Not Found</h1>");
  }
});
server.listen(process.env.PORT, () => {
  console.log(`Server is working ${process.env.PORT}`);
});
