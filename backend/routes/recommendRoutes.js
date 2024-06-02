const express = require("express");
const router = express.Router();
const recommendController = require("../controllers/recommendController.js");

router.get("/", recommendController.findRandom);

module.exports = router;
