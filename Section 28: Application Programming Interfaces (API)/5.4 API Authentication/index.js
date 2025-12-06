import express from "express";
import { config } from "./config/config.js";
import authRoutes from "./routes/authRoutes.js";
import { errorHandler } from "./middleware/errorHandler.js";

const app = express();

// Middleware
app.set("view engine", "ejs");
app.set("views", "./views");

// Routes
app.use("/", authRoutes);

// Error handling middleware (must be last)
app.use(errorHandler);

// Start the server
app.listen(config.port, () => {
  console.log(`🚀 Server is running on http://localhost:${config.port}`);
  console.log(`📝 Environment: ${process.env.NODE_ENV || "development"}`);
});
