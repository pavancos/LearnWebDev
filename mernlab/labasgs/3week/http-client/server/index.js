import http from 'http';
const server = http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  if (req.url === '/') {
    console.log("Request to / endpoint")
    res.end('/ endpoint')
  } else {
    res.end('404')
  }
});
let port = 5000
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`)
});