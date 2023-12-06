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

// Chat GPT question 2
const ask2 = async (req, res) => {
    try {
        // code to make a LIST with all the foods NAMES and AMOUNTS from the database
        const foods = await Food.findAll();
        // Use map to create an array of strings for each food entry
        const foodMessages = foods.map(food => `${food.amount} gramas de ${food.name}`);
        // Join the array into a single string
        const message = `[${foodMessages.join(', ')}]`;
        // Ask Chat Gpt to generate a Recipe using the list of foods
        const chatCompletion = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [{"role": "user", "content": `Ei chat, se passando por um cozinheiro de um restaurante de comida popular e considerando que você dispõe de especiarias, temperos e outros produtos essenciais de cozinha ilimitados, gere uma receita simples com os ingredientes: ${message}`}],
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
    ask1,
    ask2
}