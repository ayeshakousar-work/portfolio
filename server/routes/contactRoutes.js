const express = require("express");

const router = express.Router();

router.post("/", (req, res) => {
  const { name, email, message } = req.body;

  console.log("New contact message:");
  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Message:", message);

  res.status(200).json({
    success: true,
    message: "Message received successfully",
  });
});

module.exports = router;