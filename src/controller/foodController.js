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

// DELETE ALL FOOD 
const deleteAllFood = async (req, res) => {
    try {
        const foods = await Food.destroy({
            where: {},
            truncate: true
        });
        return res.json(foods);
    } catch (error) {
        return res.error(error);
    }
}

// Chat GPT Medium Recipe
const ask1 = async (req, res) => {
    try {
        // code to make a LIST with all the foods NAMES and AMOUNTS from the database
        const foods = await Food.findAll();
        // Use map to create an array of strings for each food entry
        const foodMessages = foods.map(food => `${food.amount} de ${food.name}`);
        // Join the array into a single string
        const message = `[${foodMessages.join(', ')}]`;
        // Ask Chat Gpt to generate a Recipe using the list of foods
        const chatCompletion = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [{"role": "user", "content":`Sendo cozinheiro de um restaurante de comida popular ( considerando que você dispõe de especiarias, temperos e outros produtos essenciais de cozinha ), gere EM PORTUGUÊS uma receita com os ingredientes: ${message}. Seja breve e direto, invente um nome simples para a receita (NÃO ESCREVA "nome da receita:" !!! apenas escreva o nome antes de qualquer coisa), liste os ingredientes, quantidades (não precisa utilizar toda a quantidade que foi passada na lista, faça porções normais, não muito grandes) e o modo de preparo de forma não muito detalhada. Sem textos longos e desnecessários.`}],
        });
        console.log(chatCompletion.choices[0].message);
        return res.json(chatCompletion.choices[0].message);
    } catch (error) {
        return res.json(error);
    }
}

// Chat GPT Hight Recipe
const ask2 = async (req, res) => {
    try {
        // code to make a LIST with all the foods NAMES and AMOUNTS from the database
        const foods = await Food.findAll();
        // Use map to create an array of strings for each food entry
        const foodMessages = foods.map(food => `${food.amount} de ${food.name}`);
        // Join the array into a single string
        const message = `[${foodMessages.join(', ')}]`;
        // Ask Chat Gpt to generate a Recipe using the list of foods
        const chatCompletion = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [{"role": "user", "content": `Sendo cozinheiro de um restaurante caro e refinado ( considerando que você dispõe de especiarias, temperos e outros produtos essenciais de cozinha ), gere EM PORTUGUÊS uma receita com os ingredientes: ${message}. Seja breve e direto, invente um nome em inglês que pareça caro para a receita (NÃO ESCREVA "nome da receita:" ou "title:" !!! apenas escreva o nome antes de qualquer coisa), e em português liste os ingredientes, quantidades (não precisa utilizar toda a quantidade que foi passada na lista, faça porções normais, não muito grandes) e o modo de preparo de forma não muito detalhada. Sem textos longos e desnecessários.`}],
        });
        console.log(chatCompletion.choices[0].message);
        return res.json(chatCompletion.choices[0].message);
    } catch (error) {
        return res.json(error);
    }
}

// Chat GPT Absurd Recipe
const ask3 = async (req, res) => {
    try {
        // code to make a LIST with all the foods NAMES and AMOUNTS from the database
        const foods = await Food.findAll();
        // Use map to create an array of strings for each food entry
        const foodMessages = foods.map(food => `${food.amount} de ${food.name}`);
        // Join the array into a single string
        const message = `[${foodMessages.join(', ')}]`;
        // Ask Chat Gpt to generate a Recipe using the list of foods
        const chatCompletion = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [{"role": "user", "content": `Sendo um cozinheiro muito criativo ( considerando que você dispõe de especiarias, temperos e outros produtos essenciais de cozinha ), gere EM PORTUGUÊS uma receita bem peculiar e bizarra com os ingredientes: ${message}. Seja breve e direto, invente um nome CRIATIVO para a receita (não é necessário Destacá-lo na receita com "nome:" ou algo do tipo), em português liste os ingredientes, quantidades (não precisa utilizar toda a quantidade que foi passada na lista, faça porções normais, não muito grandes) e o modo de preparo de forma não muito detalhada. Sem textos longos e desnecessários.`}],
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
    ask2,
    ask3,
    deleteAllFood
}