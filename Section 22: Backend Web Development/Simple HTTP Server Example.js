/**
 * Backend Web Development - Simple HTTP Server Example
 * Minimal request/response handling with Node.js http module.
 * Based on Angela Yu's The Complete Full-Stack Web Development Bootcamp.
 */

const http = require("http");

const hostname = "localhost";
const port = 3000;

const server = http.createServer((req, res) => {
  const { method, url } = req;

  res.setHeader("Content-Type", "text/plain; charset=utf-8");

  if (url === "/" && method === "GET") {
    res.statusCode = 200;
    res.end("Hello from the backend!");
    return;
  }

  if (url === "/about" && method === "GET") {
    res.statusCode = 200;
    res.end("About this server: Node.js http module.");
    return;
  }

  res.statusCode = 404;
  res.end("Not Found");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

// Export for testing; in real app you might not start listen here
if (typeof module !== "undefined" && module.exports) {
  module.exports = { server };
}
