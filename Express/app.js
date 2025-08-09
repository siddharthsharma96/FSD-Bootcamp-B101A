const express = require("express");
const RestaurantRoute = require("./Routes/restaurantRoutes");
const MenuRoute = require("./Routes/menuRoutes");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
  const now = new Date();
  req.requestTime = now.toLocaleString();
  next();
});

app.use("/api/v1/restaurant", RestaurantRoute);
app.use("/api/v1/menu", MenuRoute);

module.exports = app;
