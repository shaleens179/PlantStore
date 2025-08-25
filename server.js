import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import plantRoutes from "./routes/plantRoutes.js";

dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// CORS configuration - Allow all origins
app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: false
}));

app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.json({
    message: "🌿 Welcome to Urvann Plant Store API",
    version: "1.0.0",
    endpoints: {
      plants: "/api/plants",
      categories: "/api/plants/categories/all"
    }
  });
});

// API Routes
app.use("/api/plants", plantRoutes);

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📡 CORS enabled for all origins (*)`);
  console.log(`🌿 Plant Store API ready at http://localhost:${PORT}`);
});