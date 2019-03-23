const server = require('./server');

const PORT = 5000;

server.listen(PORT, () => {
  console.log(`The server is listening on port ${PORT}`);
})