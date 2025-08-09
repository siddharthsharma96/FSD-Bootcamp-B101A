const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  description: { type: String, required: true },
  imgName: String,
  imageId: String,
  inStock: { type: Boolean, default: true },
  isVeg: Boolean,
  rating: String,
  ratingCount: String,
  ratingCountV2: String,
  defaultPrice: Number,
  price: Number,
});

const SectionSchema = new mongoose.Schema({
  title: { type: String, required: true },
  itemCards: [ItemSchema],
});

const restaurantmenus =
  mongoose.models.restaurantmenus ||
  mongoose.model("restaurantmenus", SectionSchema);

module.exports = restaurantmenus;
