const restaurantSchema = require("./../Models/restaurantModel");

// Create Restaurant
exports.createRestaurant = async (req, res) => {
  try {
    const restaurant = await restaurantSchema.create(req.body);
    res.status(201).json({ status: "success", data: restaurant });
  } catch (error) {
    res.status(400).json({ status: "fail", message: error.message });
  }
};

// Get All Restaurants
exports.getAllRestaurants = async (req, res) => {
  try {
    const restaurants = await restaurantSchema.find();
    res.status(200).json({ status: "success", data: restaurants });
  } catch (error) {
    res.status(500).json({ status: "fail", message: error.message });
  }
};

// Get Restaurant by ID
exports.getRestaurantById = async (req, res) => {
  try {
    const restaurant = await restaurantSchema.findById(req.params.resId);
    if (!restaurant) {
      return res
        .status(404)
        .json({ status: "fail", message: "Restaurant not found" });
    }
    res.status(200).json({ status: "success", data: restaurant });
  } catch (error) {
    res.status(500).json({ status: "fail", message: error.message });
  }
};

// Delete Restaurant
exports.deleteRestaurant = async (req, res) => {
  try {
    const deleted = await restaurantSchema.findByIdAndDelete(req.params.resId);
    console.log(deleted, req.params.resId);

    if (!deleted) {
      return res
        .status(404)
        .json({ status: "fail", message: "Restaurant not found" });
    }
    res.status(200).json({ status: "success", message: "Restaurant deleted" });
  } catch (error) {
    res.status(500).json({ status: "fail", message: error.message });
  }
};

exports.updateRestaurant = async (req, res) => {
  try {
    const updatedRestaurant = await restaurantSchema.findByIdAndUpdate(
      req.params.resId,
      req.body,
      { new: true, runValidators: true }
    );

    if (!updatedRestaurant) {
      return res.status(404).json({
        status: "fail",
        message: "Restaurant not found",
      });
    }

    res.status(200).json({
      status: "success",
      data: updatedRestaurant,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: error.message,
    });
  }
};
