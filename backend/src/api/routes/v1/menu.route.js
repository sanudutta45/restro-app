const express = require("express");

const controller = require("../../controllers/menu.controller");

const router = express.Router();

router.route("/:id")
    .get(controller.getMenu);

module.exports = router;