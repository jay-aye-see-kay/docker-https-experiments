const express = require('express');

const PORT = 8080;
const HOST = '0.0.0.0';

const app = express();
app.get('/', (req, res) => {
  res.send('I\'m server 2');
});

app.listen(PORT, HOST);
console.log(`Server 2 running on ${HOST}:${PORT}`);
