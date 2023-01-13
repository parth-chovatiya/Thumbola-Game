const express = require("express");
const router = express.Router();

const { generateMatrix } = require("../controllers/generateMatrix.controller");
const {
  generateRandomNumber,
} = require("../controllers/generateRandomNumber.controller");
const { markElements } = require("../controllers/markElements.controller");

const generateMatrixValidation = require("../validators/validation");

router.post("/generateMatrix", generateMatrixValidation, generateMatrix);
router.get("/generateRandomNumber", generateRandomNumber);
router.post("/markElements", markElements);

module.exports = router;
