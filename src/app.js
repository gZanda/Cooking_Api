const express = require('express');
const app = express();
const port = 3000;
const db = require('./Database/dbConfig.js');

// GET Request
app.get('/', (req, res) => {
  res.send('Hello, your server is up and running!');
});

// GET Request
app.get('/yey', (req, res) => {
  res.send('yey');
});

// This defines the server port
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
