const recommendModel = require("../models/recommendModel.js");

const recommendController = {
  findRandom: async (req, res) => {
    try {
      const food = await recommendModel.findRandom();
      res.json(food);
    } catch (error) {
      console.error("Error fetching restaurants detail:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  },
};

module.exports = recommendController;
