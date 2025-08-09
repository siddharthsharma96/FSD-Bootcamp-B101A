// routes/menuRoutes.js

const express = require("express");
const router = express.Router();
const menuController = require("./../Controllers/menuController");

router.post("/", menuController.createMenu);
router.get("/", menuController.getAllMenus);

module.exports = router;
