// API logic

const Food = require('../database/models/Foods');
const {OpenAI} = require("openai");
const openai = new OpenAI({apiKey: `${process.env.OPEN_AI_KEY}`});

// GET ALL FOODS
const getAllFood = async (req, res) => {
    try {
        const foods = await Food.findAll();
        return res.json(foods);
    } catch (error) {
        return res.error(error);
    }
}

// CREATE FOOD
const createFood = async (req, res) => {
    try {
        const name = req.body.name;
        const amount = req.body.amount;
        const food = await Food.create({ name, amount });
        return res.json(food);
    } catch (error) {
        return res.error(error);
    }
}

// Chat GPT question
const ask1 = async (req, res) => {
    try {
        const chatCompletion = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [{"role": "user", "content": "Hey chat, are you ok ?"}],
        });
        console.log(chatCompletion.choices[0].message);
        return res.json(chatCompletion.choices[0].message);
    } catch (error) {
        return res.json(error);
    }
}

module.exports = {
    getAllFood,
    createFood,
    ask1
}