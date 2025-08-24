import mongoose from "mongoose";
import dotenv from "dotenv";
import Product from "./models/Product.js"; // assuming your model file is Product.js

dotenv.config();

const products = [
  {
    name: "Aloe Vera",
    description: "Fresh Aloe Vera plant for indoors.",
    price: 199,
    image: "https://example.com/images/aloe-vera.jpg",
    category: "Indoor",
  },
  {
    name: "Money Plant",
    description: "Popular indoor plant for good luck.",
    price: 299,
    image: "https://example.com/images/money-plant.jpg",
    category: "Indoor",
  },
  {
    name: "Rose Plant",
    description: "Beautiful red rose flowering plant.",
    price: 399,
    image: "https://example.com/images/rose.jpg",
    category: "Flowering",
  },
];

mongoose
  .connect(process.env.MONGO_URI)
  .then(async () => {
    console.log("✅ MongoDB connected for seeding...");

    // clear old data (optional)
    await Product.deleteMany();

    // insert new data
    await Product.insertMany(products);

    console.log("🌱 Data seeded successfully!");
    process.exit(); // exit the script
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

