require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// routes
const userRoute = require("./Routes/user");
const productRoute = require("./Routes/product");
const cartRoute = require("./Routes/cart");

app.use("/user", userRoute);
app.use("/product", productRoute);
app.use("/cart", cartRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Backend running on port ${PORT}`);
});