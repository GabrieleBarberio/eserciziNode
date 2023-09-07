import { createServer } from "node:http";

const server = createServer((_, response) => {
  console.log("request received");

  response.statusCode = 200;

  response.setHeader("Content-Type", "text/html");

  response.end(
    "<html><body><h1>This page was served with Node.js and edited by Gab!</h1></body></html>"
  );
});

server.listen(3000, () => {
  console.log(`Server up and running at http://localhost:3000`);
});
