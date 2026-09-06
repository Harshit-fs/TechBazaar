  const express = require("express");
  const router = express.Router();
  const db = require("../Db");

  // Route to add product to cart
  router.post("/cart", (req, res) => {
    const { user_id, product_id, quantity } = req.body;

    const sql =
      "INSERT INTO cart (user_id, product_id, quantity) VALUES (?, ?, ?)";

    db.query(sql, [user_id, product_id, quantity], (err, result) => {
      if (err) {
        console.log(err);
        return res.status(500).json({ message: "Database Error" });
      }

      res.json({
        success: true,
        message: "Product added to cart"
      });
    });
  });

  //db select query to get all products in the cart for a specific user
  router.get("/all", (req, res) => {

    const { user_id } = req.query;

    const sql = `
      SELECT
        cart.id,
        cart.quantity,
        addproducts.id AS product_id,
        addproducts.name,
        addproducts.price,
        addproducts.image

      FROM cart

      INNER JOIN addproducts
      ON cart.product_id = addproducts.id

      WHERE cart.user_id = ?
    `;

    db.query(sql, [user_id], (err, result) => {

      if(err){
        console.log(err);
        return res.status(500).json({ error: "DB Error" });
      }

      res.json(result);

    });

  });

  // Route to get all cart items for a specific user
  router.get("/:user_id", (req, res) => {
    const { user_id } = req.params;

    const sql = `
      SELECT *
      FROM cart
      WHERE user_id = ?
    `;

    db.query(sql, [user_id], (err, result) => {
      if (err) {
        console.log(err);
        return res.status(500).json({ message: "Database Error" });
      }

      res.json(result);
    });
  });

  //order to delete a product from the cart
  router.delete("/delete", (req, res) => {

    const { id } = req.body;

    const sql = "DELETE FROM cart WHERE id = ?";

    db.query(sql, [id], (err, result) => {

      if(err){
        console.log(err);
        return res.status(500).json({error:"DB Error"});
      }

      res.json({
        success: true,
        message: "Item Deleted"
      });

    });

  });

  //order to update the quantity of a product in the cart
  router.put("/update", (req, res) => {

    const { id, quantity } = req.body;

    const sql = `
      UPDATE cart
      SET quantity = ?
      WHERE id = ?
    `;

    db.query(sql, [quantity, id], (err, result) => {

      if(err){
        console.log(err);
        return res.status(500).json({error:"DB Error"});
      }

      res.json({
        success: true,
        message: "Quantity Updated"
      });

    });


  });

  //order to place an order
  router.post("/orders", (req, res) => {

    const {
      name,
      phone,
      address,
      items,
      payment_method,
      payment_status,
      status,
      total_amount
    } = req.body;

    const sql = `
      INSERT INTO orders 
      (name, phone, address, items, payment_method, payment_status, status, total_amount)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;

    db.query(sql, [
      name,
      phone,
      address,
      JSON.stringify(items),
      payment_method || "COD",
      payment_status || "pending",
      status || "pending",
      total_amount || 0
    ], (err, result) => {

      if (err) {
        console.log(err);
        return res.status(500).json(err);
      }

      res.json({
        success: true,
        message: "Order placed",
        orderId: result.insertId
      });

    });
  });
  module.exports = router;