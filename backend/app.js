const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const foodRoutes = require("./routes/foodRoutes");
const addFoodRoutes = require("./routes/addFoodRoutes.js");
const restaurantRoutes = require("./routes/restaurantRoutes.js");
const recommendedRoutes = require("./routes/recommendRoutes.js");
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use("/api/foods", foodRoutes);
app.use("/api/add-food", addFoodRoutes);
app.use("/api/restaurants", restaurantRoutes);
app.use("/api/recommend-food", recommendedRoutes);

module.exports = app;
