const express = require('express');
const app = express();
const port = 3000;
const sequelize = require('./database/sequelize');
const Foods = require('./database/models/Foods');
require("dotenv").config();
const {OpenAI} = require("openai");

// ------------------ OpenAI Config ------------------

const openai = new OpenAI({
  apiKey: `${process.env.OPEN_AI_KEY}`
});

// ------------------ Middleware ------------------

app.use(express.json());

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

// GET API 1
app.get('/ask1', async (req, res) => {
  const chatCompletion = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [{"role": "user", "content": "Hello!"}],
  });
  console.log(chatCompletion.choices[0].message);
  res.send(chatCompletion.choices[0].message);
});

// GET API 2
app.get('/ask2', async (req, res) => {
  const completion = await openai.completions.create({
    model: "text-davinci-003",
    prompt: "This story begins",
    max_tokens: 30,
  });
  console.log(completion.choices[0].text);
});


// ------------------ Server Config ------------------

// This defines the server port
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
