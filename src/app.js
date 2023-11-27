const express = require('express');
const app = express();
const port = 3000;
const sequelize = require('./database/sequelize');
const Foods = require('./database/models/Foods');
const bodyParser = require('body-parser');

// ------------------ Middleware ------------------

app.use(bodyParser.json());

// ------------------ Database ------------------

// Database sync
sequelize.sync({force: true})
  .then(() => {
    console.log('Database & tables created!');
  })
  .catch(error => {
    console.log(error);
  });

// ------------------ Endpoints ------------------

// GET Request
app.get('/', (req, res) => {
  res.send('Hello, your server is up and running!');
});

// POST
app.post('/addFood/', (req, res) => {
  const name = req.body.name;
  const amount = req.body.amount;
  Foods.create({ name, amount })
    .then(food => res.json(food))
    .catch(error => res.json(error));
});

// GET
app.get('/foods/', (req, res) => {
  Foods.findAll()
    .then(foods => res.json(foods))
    .catch(error => res.json(error));
});

// ------------------ Server Config ------------------

// This defines the server port
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
