import http from "http";
const hostname = "0.0.0.0";
const port = 3000;
const server = http.createServer((req, res) => {
  const headers = {
    "Access-Control-Allow-Origin": "*",
  };

  res.setHeader("Content-Type", "application/json");
  res.writeHead(200, headers);
  res.end(
    '[{"id":"e03fa61c-bab5-46d2-bba3-9e040dc671f6","name":"abceddddddddd2323","favorite":true},{"id":"afac3455-1394-4682-ab12-19ba2bd523e8","name":"task 3","favorite":true},{"id":"afac3455-1394-4682-ab12-19ba2bd456e8","name":"new task","favorite":true},{"id":"afac3455-1394-4682-ab12-19ba2bd123e8","name":"taskkkkkk","favorite":true}]'
  );
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
