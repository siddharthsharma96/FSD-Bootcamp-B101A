const express = require("express");
const restaurantController = require("./../Controllers/restaurantController");
const routes = express.Router();
console.log(restaurantController);

routes
  .route("/")
  .get(restaurantController.getAllRestaurants)
  .post(restaurantController.createRestaurant);
routes
  .route("/:resId")
  .get(restaurantController.getRestaurantById)
  .patch(restaurantController.updateRestaurant)
  .delete(restaurantController.deleteRestaurant);

module.exports = routes;
