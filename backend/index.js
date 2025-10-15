import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import { connectDB } from "./config/connectDB.js";
dotenv.config();
import authRouter from "./routes/auth.routes.js";
import adminRouter from "./routes/admin.routes.js";
import categoryRouter from "./routes/category.routes.js";
import productRouter from "./routes/product.routes.js";
import addressRouter from "./routes/address.routes.js";
import orderRouter from "./routes/order.routes.js";
import userRouter from "./routes/user.routes.js";

const app = express();
import path from "path";

connectDB();
// middlewares
app.use(express.json());
app.use(cors({ origin: "https://tarkaribazaar-frontend.onrender.com", credentials: true }));
app.use(cookieParser());
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use("/uploads", express.static(path.join(process.cwd(),"uploads")));
app.use("/api/auth", authRouter);
app.use("/api/admin", adminRouter);
app.use("/api/category", categoryRouter);
app.use("/api/product", productRouter);
app.use("/api/address", addressRouter);
app.use("/api/order", orderRouter);
app.use("/api/user", userRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
