const FoodModel = require("../models/foodModel");

const foodController = {
  findAll: async (req, res) => {
    try {
      const foods = await FoodModel.findAll();
      res.json(foods);
    } catch (error) {
      console.error("Error fetching foods:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  },

  findHome: async (req, res) => {
    try {
      const foods = await FoodModel.findHome();
      res.json(foods);
    } catch (error) {
      console.error("Error fetching foods:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  },

  findById: async (req, res) => {
    try {
      const food = await FoodModel.findById(req.params.id);
      res.json(food);
    } catch (error) {
      console.error("Error fetching food detail:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  },

  addFood: async (req, res) => {
    console.log(1);
    console.log(req);
    const { name, description, price } = req.body;
    const imageURL = req.file ? req.file.path : null;
    console.log(`name : ${name}`);
    console.log(`description : ${description}`);
    console.log(`image_url : ${imageURL}`);
    console.log(`price : ${price}`);
    try {
      const newFood = await FoodModel.addFood({
        name,
        description,
        imageURL: `http://localhost:5000/${imageURL}`,
        price,
      });
      res.status(201).json(newFood);
    } catch (error) {
      console.error("Error adding food:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  },

  deleteFood: async (req, res) => {
    try {
      const food = await FoodModel.findById(req.params.id);
      if (!food) {
        return res.status(404).json({ message: "Food not found" });
      }

      await FoodModel.deleteFood(req.params.id);
      res.status(200).json({ message: "Food deleted successfully" });
    } catch (error) {
      console.error("Error deleting food:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  },

  updateFood: async (req, res) => {
    const { id } = req.params;
    const { name, description, price } = req.body;
    const imageURL = req.file ? req.file.path : null;

    try {
      const updatedFood = await FoodModel.updateFood(id, {
        name,
        description,
        imageURL,
        price,
      });
      res.status(200).json(updatedFood);
    } catch (error) {
      console.error("Error updating food:", error);
      res.status(500).json({ message: error.message });
    }
  },
};

module.exports = foodController;
