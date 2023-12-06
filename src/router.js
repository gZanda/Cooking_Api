// Routes for the API

const express = require('express');
const router = express.Router();
const {OpenAI} = require("openai");
const foodController = require('./controller/foodController');
router.use(express.json());

const openai = new OpenAI({
    apiKey: `${process.env.OPEN_AI_KEY}`
});
  
// POST
router.post('/createFood/', foodController.createFood);

// GET all foods
router.get('/foods/', foodController.getAllFood);

// ----------------- OPEN AI -----------------

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

// ----------------- Module Export -----------------

module.exports = router;