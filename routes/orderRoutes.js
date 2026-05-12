const express = require("express");
const router = express.Router();
const Order = require("../models/Order");

// PLACE ORDER
router.post("/place", async (req, res) => {
  try {
    const { userId, items, totalAmount, address } = req.body;

    const newOrder = new Order({
      userId,
      items,
      totalAmount,
      address
    });

    await newOrder.save();

    res.status(201).json({
      message: "Order placed successfully",
      order: newOrder
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;