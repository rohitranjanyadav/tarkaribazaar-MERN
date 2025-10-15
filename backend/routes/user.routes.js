import express from "express";
import Order from "../models/order.model.js";
import { isAdmin } from "../middlewares/isAdmin.js";

const router = express.Router();

router.get("/total-buyers", isAdmin, async (req, res) => {
  try {
    const buyers = await Order.distinct("user");
    res.json({ success: true, totalBuyers: buyers.length });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to count buyers",
      error: error.message,
    });
  }
});

export default router;
