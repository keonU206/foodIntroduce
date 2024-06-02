const express = require("express");
const router = express.Router();
const restaurantController = require("../controllers/restaurantController");

router.get("/", restaurantController.findAll);
router.get("/home", restaurantController.findHomeDate);
router.get("/:id", restaurantController.findById);

module.exports = router;
