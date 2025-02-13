const express = require("express");
const router = express.Router();
const cafeController = require("../controllers/cafeController");

router.get("/", cafeController.listarCafes);
router.post("/", cafeController.adicionarCafe);
router.get("/:id", cafeController.buscarCafePorId);
router.delete("/:id", cafeController.removerCafe);

module.exports = router;