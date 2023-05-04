const express = require("express");
const cors = require("cors");

const app = express();

const ApiError = require("./app/api-error");


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

// handle 404 response
app.use((req, res, next) => {
    // Code ở đây sẽ chạy khi không có route được định nghĩa nào
    // khớp với yêu cầu. Gọi next() để chuyển sang middleware xử lý lỗi
    return next(new ApiError(404, "Resource not found"));
});
    // define error-handling middleware last, after other app.use() and routes calls
app.use((err, req, res, next) => {
    // Middleware xử lý lỗi tập trung.
    // Trong các đoạn code xử lý ở các route, gọi next(error)
    // sẽ chuyển về middleware xử lý lỗi này
    return res.status(error.statusCode || 500).json({
        message: error.message || "Internal Server Error",
    });
});
    
module.exports = app;