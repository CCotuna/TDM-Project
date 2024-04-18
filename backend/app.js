import http from "http";
import { parse } from "url";

const hostname = "0.0.0.0";
const port = 3000;

const server = http.createServer((req, res) => {
  const headers = {
    "Access-Control-Allow-Origin": "http://localhost:5173", // Replace with the origin of your frontend application
    "Access-Control-Allow-Methods": "GET, POST, PUT, PATCH, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
    "Access-Control-Allow-Credentials": "true",
  };

  const { pathname, query } = parse(req.url, true);

  if (req.method === "OPTIONS") {
    // Preflight request handling
    res.writeHead(204, headers);
    res.end();
  } else if (pathname === "/login" && req.method === "POST") {
    // Handle login request
    // Your login logic goes here
  } else {
    // Handle other requests
    res.writeHead(200, headers);
    res.setHeader("Content-Type", "application/json");
    res.end(
      JSON.stringify([
        {
          id: "e03fa61c-bab5-46d2-bba3-9e040dc671f6",
          name: "abceddddddddd2323",
          favorite: true,
        },
        {
          id: "afac3455-1394-4682-ab12-19ba2bd523e8",
          name: "task 3",
          favorite: true,
        },
        {
          id: "afac3455-1394-4682-ab12-19ba2bd456e8",
          name: "new task",
          favorite: true,
        },
        {
          id: "afac3455-1394-4682-ab12-19ba2bd123e8",
          name: "taskkkkkk",
          favorite: true,
        },
      ])
    );
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
