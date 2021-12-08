const express = require('express');
const server = express();

server.all('/', (req, res) => {
  res.send('Your bot is online')
})

function keepAllive() {
  server.listen(3000, () => {
    console.log("Server is ready" + Date.now())
  });
}

module.exports = keepAllive;
