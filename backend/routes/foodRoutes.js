const express = require("express");
const router = express.Router();
const multer = require("multer");
const foodController = require("../controllers/foodController");

// Multer 설정
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // 업로드된 파일의 저장 위치
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // 저장될 파일명
  },
});

const upload = multer({ storage: storage });

router.get("/", foodController.findAll);
router.get("/home", foodController.findHome);
router.get("/:id", foodController.findById);
router.delete("/:id", foodController.deleteFood);
router.put("/:id", upload.single("image"), foodController.updateFood);

module.exports = router;
