import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();

// Fixed CORS configuration - only one cors middleware
app.use(cors({
  origin: ["http://localhost:3000", "http://localhost:3001"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

app.use(express.json());

// Sample plants array
const plants = [
  {
    id: 1,
    name: "Aloe Vera",
    price: 200,
    category: "Indoor",
    stock: 50,
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Petunie.jpg"
  },
  {
    id: 2,
    name: "Snake Plant",
    price: 350,
    category: "Indoor",
    stock: 40,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Bl%C3%BChendes_Strand-Milchkraut_%28Glaux_maritima%29_am_Strand_von_Norderney_03.jpg/800px-Bl%C3%BChendes_Strand-Milchkraut_%28Glaux_maritima%29_am_Strand_von_Norderney_03.jpg"
  },
  {
    id: 3,
    name: "Rose Plant",
    price: 150,
    category: "Outdoor",
    stock: 30,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Trillium_erectum_-_Stephen%27s_Gulch_CA.jpg/800px-Trillium_erectum_-_Stephen%27s_Gulch_CA.jpg"
  }
];

// Routes
app.get("/", (req, res) => {
  res.send("Hello from backend");
});

app.get("/api/plants", (req, res) => {
  console.log("Plants API called"); // Added for debugging
  res.json(plants);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📡 CORS enabled for: http://localhost:3000, http://localhost:3001`);
});