const express = require("express");
const router = express.Router();
const cafeController = require("../controllers/cafeController");

router.get("/", cafeController.listaCafes);
router.post("/", cafeController.adicionarCafe);
router.get("/", cafeController.buscarCafes);
router.delete("/", cafeController.removerCafe);
router.put("/", cafeController.updateCafe);