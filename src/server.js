const express = require('express');
const server = express();
const name = "Muxic#0529";

server.all('/', (req, res) => {
  res.send(`${name} has logged in.`)
})

function keepAllive() {
  server.listen(3000, () => {
    console.log("Server is ready" + Date.now())
  });
}

module.exports = keepAllive;

