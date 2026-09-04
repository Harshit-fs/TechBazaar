const express = require("express");
const router = express.Router();

const db = require("../Db");  
const bcrypt = require("bcryptjs");

// REGISTER
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const hashPassword = await bcrypt.hash(password, 10);

    const sql = "INSERT INTO users(name,email,password) VALUES(?,?,?)";

    db.query(sql, [name, email, hashPassword], (err) => {
      if (err) return res.status(500).json(err);

      res.json({
        success: true,
        message: "User Registered"
      });
    }); 
    

  } catch (error) {
    res.status(500).json(error);
  }
});

// LOGIN
router.post("/login", (req, res) => {
  const { email, password } = req.body;

  const sql = "SELECT * FROM users WHERE email=?";

  db.query(sql, [email], async (err, result) => {
    if (err) return res.status(500).json(err);

    if (result.length === 0) {
      return res.json({
        success: false,
        message: "User Not Found"
      });
    }

    const validPassword = await bcrypt.compare(
      password,
      result[0].password
    );

    if (!validPassword) {
      return res.json({
        success: false,
        message: "Wrong Password"
      });
    }

    res.json({
      success: true,
      message: "Login Success",
      user: result[0]
    });
  });
});

//Contact API
router.post("/contact", (req, res) => {
  const {
    firstname,
    lastname,
    email,
    phone,
    about,
    order_no,
    message
  } = req.body;

  console.log(req.body);

  const sql = `
    INSERT INTO contact
    (firstname, lastname, email, phone, about, order_no, message)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `;

  db.query(
    sql,
    [firstname, lastname, email, phone, about, order_no, message],
    (err, result) => {
      if (err) {
        console.log(err);
        return res.status(500).json({ error: "DB error" });
      }

      res.json({ success: true, message: "Inserted successfully" });
    }
  );
});

module.exports = router;