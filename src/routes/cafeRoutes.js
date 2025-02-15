const express = require("express");
const router = express.Router();
const cafeController = require("../controllers/cafeController.js");

router.get("/", cafeController.getAllCafes);
router.post("/", cafeController.addCafe);
router.get("/:id", cafeController.updateCafe);
router.delete("/:id", cafeController.deleteCafe);

module.exports = router;