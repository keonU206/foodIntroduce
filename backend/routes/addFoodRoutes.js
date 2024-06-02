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

// 파일 업로드가 있는 라우트에 multer 미들웨어 적용
router.post("/", upload.single("image"), foodController.addFood);

module.exports = router;
