const express = require("express");

const controller = require("../../controllers/restaurent.controller");

const router = express.Router();

router.route("/").get(controller.getRestaurents);

router.route("/dishes/:id").get(controller.getRestaurentMenu);

router.route("/category/:id").get(controller.getCategories);

module.exports = router;
