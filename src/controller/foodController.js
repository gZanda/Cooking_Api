// API logic

const Food = require('../database/models/Foods');

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

module.exports = {
    getAllFood,
    createFood
}