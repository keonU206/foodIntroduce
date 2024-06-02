const restaurantModel = require("../models/restaurantModel");

const restaurantController = {
  findAll: async (req, res) => {
    try {
      const restaurants = await restaurantModel.findAll();
      res.json(restaurants);
    } catch (error) {
      console.error("Error Fetching restaurants", error);
      res.status(500).json({ message: "Internal server error" });
    }
  },

  findHomeDate: async (req, res) => {
    try {
      const restaurants = await restaurantModel.findHomeDate();
      res.json(restaurants);
    } catch (error) {
      console.error("Error Fetching restaurants", error);
      res.status(500).json({ message: "Internal server error" });
    }
  },

  findById: async (req, res) => {
    try {
      const food = await restaurantModel.findById(req.params.id);
      res.json(food);
    } catch (error) {
      console.error("Error fetching restaurants detail:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  },
};

module.exports = restaurantController;
