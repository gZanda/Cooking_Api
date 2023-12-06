const express = require('express');
const router = express.Router();
const Foods = require('./database/models/Foods');
router.use(express.json());
const {OpenAI} = require("openai");

const openai = new OpenAI({
    apiKey: `${process.env.OPEN_AI_KEY}`
});
  

// GET Request
router.get('/', (req, res) => {
    res.send('Hello, your server is up and running!');
});

// POST
router.post('/addFood/', (req, res) => {
    const name = req.body.name;
    const amount = req.body.amount;
    Foods.create({ name, amount })
        .then(food => res.json(food))
        .catch(error => res.json(error));
});

// GET all foods
router.get('/foods/', (req, res) => {
    Foods.findAll()
        .then(foods => res.json(foods))
        .catch(error => res.json(error));
});

// GET Chat Response
router.get('/ask1', async (req, res) => {
    const chatCompletion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [{"role": "user", "content": "Hey chat, are you ok ?"}],
    });
    console.log(chatCompletion.choices[0].message);
    res.send(chatCompletion.choices[0].message);
});

// GET API 2
router.get('/ask2', async (req, res) => {
    const completion = await openai.completions.create({
        model: "text-davinci-003",
        prompt: "This story begins",
        max_tokens: 30,
    });
    console.log(completion.choices[0].text);
});

module.exports = router;