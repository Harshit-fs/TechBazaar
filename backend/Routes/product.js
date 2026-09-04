const express = require("express");
const router = express.Router();
const db = require("../Db");

// ADD PRODUCT
router.post("/addproduct", (req, res) => {
  const { name, price, image } = req.body;

  const sql =
    "INSERT INTO addproducts (name, price, image) VALUES (?, ?, ?)";

  db.query(sql, [name, price, image], (err, result) => {
    if (err) return res.status(500).json(err);

    res.json({ message: "Product added" });
  });
});

// GET PRODUCTS
router.get("/products", (req, res) => {
  const sql = "SELECT * FROM addproducts";

  db.query(sql, (err, result) => {
    if (err) return res.status(500).json(err);

    const data = result.map(p => ({
      ...p,
      images: [p.image]   // convert single image to array
    }));

    res.json(data);
  });
});

module.exports = router;
