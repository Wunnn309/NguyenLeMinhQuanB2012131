const express = require("express");
const cors = require("cors");

const app = express();

const phoneintroduce = require("./app/routes/introduce.route");
const phonecart = require("./app/routes/cart.route");
const phonefeedback = require("./app/routes/feedback.route");
const phoneorder = require("./app/routes/order.route");
const phoneproduct = require("./app/routes/product.route");
const phonesignin = require("./app/routes/signin.route");
app.use(cors());
app.use(express.json());
app.use("/api/introduce", phoneintroduce);
app.use("/api/product", phoneproduct);
app.use("/api/feedback", phonefeedback);
app.use("/api/signin", phonesignin);
app.use("/api/cart", phonecart);
app.use("/api/order", phoneorder);
app.get("/", (req, res) => {
    res.json({ message: "Welcome to phoneshop application"});
});

module.exports = app;