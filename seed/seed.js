import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Plant from '../models/Plant.js';

dotenv.config();

const plants = [
  {
    name: "Aloe Vera",
    price: 299,
    categories: ["Indoor", "Air Purifying", "Succulent"],
    stock: 45,
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    description: "A popular succulent known for its medicinal properties and air-purifying abilities.",
    careLevel: "Easy",
    size: "Medium"
  },
  {
    name: "Snake Plant",
    price: 450,
    categories: ["Indoor", "Air Purifying", "Low Maintenance"],
    stock: 38,
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308",
    description: "Perfect for beginners, this plant is virtually indestructible and purifies air effectively.",
    careLevel: "Easy",
    size: "Large"
  },
  {
    name: "Peace Lily",
    price: 350,
    categories: ["Indoor", "Air Purifying", "Flowering"],
    stock: 25,
    image: "https://images.unsplash.com/photo-1465101162946-4377e57745c3",
    description: "Beautiful flowering plant that removes toxins from the air and adds elegance to any room.",
    careLevel: "Easy",
    size: "Medium"
  },
  {
    name: "Money Plant",
    price: 180,
    categories: ["Indoor", "Home Decor", "Low Maintenance"],
    stock: 60,
    image: "https://images.unsplash.com/photo-1454023492550-5696f8ff10e1",
    description: "Believed to bring good luck and prosperity, this trailing plant is perfect for hanging baskets.",
    careLevel: "Easy",
    size: "Small"
  },
  {
    name: "Spider Plant",
    price: 220,
    categories: ["Indoor", "Air Purifying", "Pet Friendly"],
    stock: 42,
    image: "https://images.unsplash.com/photo-1444392061819-422f63b42154",
    description: "Safe for pets and excellent at removing formaldehyde from the air.",
    careLevel: "Easy",
    size: "Medium"
  },
  {
    name: "ZZ Plant",
    price: 550,
    categories: ["Indoor", "Low Maintenance", "Home Decor"],
    stock: 20,
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
    description: "A stunning plant with glossy leaves that requires minimal care and thrives in low light.",
    careLevel: "Easy",
    size: "Large"
  },
  {
    name: "Pothos",
    price: 280,
    categories: ["Indoor", "Air Purifying", "Trailing"],
    stock: 35,
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173",
    description: "Versatile trailing plant that can grow in various conditions and purifies indoor air.",
    careLevel: "Easy",
    size: "Medium"
  },
  {
    name: "Fiddle Leaf Fig",
    price: 1200,
    categories: ["Indoor", "Home Decor", "Statement Plant"],
    stock: 15,
    image: "https://images.unsplash.com/photo-1514342959091-6d34bfec5455",
    description: "A stunning statement plant with large, violin-shaped leaves that adds drama to any space.",
    careLevel: "Medium",
    size: "Large"
  },
  {
    name: "Monstera Deliciosa",
    price: 850,
    categories: ["Indoor", "Home Decor", "Tropical"],
    stock: 18,
    image: "https://images.unsplash.com/photo-1524594154903-2f9b37f5b191",
    description: "Iconic plant with distinctive split leaves, perfect for creating a tropical atmosphere.",
    careLevel: "Medium",
    size: "Large"
  },
  {
    name: "Chinese Evergreen",
    price: 380,
    categories: ["Indoor", "Air Purifying", "Low Light"],
    stock: 30,
    image: "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38",
    description: "Tolerant of low light conditions and excellent at removing indoor air pollutants.",
    careLevel: "Easy",
    size: "Medium"
  },
  {
    name: "Rose Plant",
    price: 250,
    categories: ["Outdoor", "Flowering", "Garden"],
    stock: 40,
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b",
    description: "Classic flowering plant that adds beauty and fragrance to any garden.",
    careLevel: "Medium",
    size: "Medium"
  },
  {
    name: "Lavender",
    price: 180,
    categories: ["Outdoor", "Herb", "Aromatic"],
    stock: 55,
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca",
    description: "Aromatic herb with beautiful purple flowers, perfect for gardens and balconies.",
    careLevel: "Easy",
    size: "Small"
  },
  {
    name: "Jasmine",
    price: 320,
    categories: ["Outdoor", "Flowering", "Aromatic"],
    stock: 28,
    image: "https://images.unsplash.com/photo-1455656678494-4d1fcd002ed0",
    description: "Fragrant flowering plant that creates a romantic atmosphere in outdoor spaces.",
    careLevel: "Medium",
    size: "Medium"
  },
  {
    name: "Bamboo Palm",
    price: 420,
    categories: ["Indoor", "Air Purifying", "Tropical"],
    stock: 22,
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b",
    description: "Tropical palm that adds a touch of the exotic while purifying indoor air.",
    careLevel: "Medium",
    size: "Large"
  },
  {
    name: "English Ivy",
    price: 150,
    categories: ["Indoor", "Outdoor", "Trailing", "Air Purifying"],
    stock: 65,
    image: "https://images.unsplash.com/photo-1454023492550-5696f8ff10e1",
    description: "Versatile trailing plant that can grow both indoors and outdoors.",
    careLevel: "Easy",
    size: "Small"
  },
  {
    name: "Cactus",
    price: 120,
    categories: ["Indoor", "Outdoor", "Succulent", "Low Maintenance"],
    stock: 80,
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b",
    description: "Perfect for those who want plants but have limited time for care.",
    careLevel: "Easy",
    size: "Small"
  },
  {
    name: "Succulent Collection",
    price: 200,
    categories: ["Indoor", "Succulent", "Low Maintenance"],
    stock: 45,
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    description: "Beautiful collection of various succulents in an attractive arrangement.",
    careLevel: "Easy",
    size: "Small"
  },
  {
    name: "Orchid",
    price: 680,
    categories: ["Indoor", "Flowering", "Home Decor"],
    stock: 12,
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308",
    description: "Elegant flowering plant that adds sophistication to any interior.",
    careLevel: "Hard",
    size: "Medium"
  },
  {
    name: "Bonsai Tree",
    price: 950,
    categories: ["Indoor", "Home Decor", "Artistic"],
    stock: 8,
    image: "https://images.unsplash.com/photo-1514342959091-6d34bfec5455",
    description: "Miniature tree that represents the art of patience and careful cultivation.",
    careLevel: "Hard",
    size: "Small"
  },
  {
    name: "Fern",
    price: 280,
    categories: ["Indoor", "Outdoor", "Shade Loving"],
    stock: 35,
    image: "https://images.unsplash.com/photo-1454023492550-5696f8ff10e1",
    description: "Lush green fern that thrives in shady areas and adds natural beauty.",
    careLevel: "Medium",
    size: "Medium"
  },
  {
    name: "Tulsi (Holy Basil)",
    price: 120,
    categories: ["Outdoor", "Herb", "Medicinal"],
    stock: 70,
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca",
    description: "Sacred herb with medicinal properties, perfect for spiritual and health purposes.",
    careLevel: "Easy",
    size: "Small"
  },
  {
    name: "Mint",
    price: 90,
    categories: ["Outdoor", "Herb", "Culinary"],
    stock: 85,
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    description: "Refreshing herb perfect for teas, cocktails, and culinary uses.",
    careLevel: "Easy",
    size: "Small"
  },
  {
    name: "Rosemary",
    price: 110,
    categories: ["Outdoor", "Herb", "Culinary", "Aromatic"],
    stock: 60,
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308",
    description: "Aromatic herb with needle-like leaves, great for cooking and aromatherapy.",
    careLevel: "Easy",
    size: "Small"
  },
  {
    name: "Thyme",
    price: 95,
    categories: ["Outdoor", "Herb", "Culinary"],
    stock: 75,
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b",
    description: "Versatile culinary herb that adds flavor to various dishes.",
    careLevel: "Easy",
    size: "Small"
  },
  {
    name: "Sage",
    price: 130,
    categories: ["Outdoor", "Herb", "Culinary", "Medicinal"],
    stock: 45,
    image: "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38",
    description: "Aromatic herb with gray-green leaves, used in cooking and traditional medicine.",
    careLevel: "Easy",
    size: "Small"
  },
  {
    name: "Lemon Grass",
    price: 140,
    categories: ["Outdoor", "Herb", "Culinary", "Aromatic"],
    stock: 40,
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca",
    description: "Tall grass with citrus flavor, perfect for Asian cuisine and herbal teas.",
    careLevel: "Medium",
    size: "Medium"
  },
  {
    name: "Curry Leaf",
    price: 160,
    categories: ["Outdoor", "Herb", "Culinary"],
    stock: 35,
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173",
    description: "Essential herb in Indian cooking, adds authentic flavor to curries.",
    careLevel: "Medium",
    size: "Small"
  },
  {
    name: "Bay Leaf",
    price: 170,
    categories: ["Outdoor", "Herb", "Culinary"],
    stock: 30,
    image: "https://images.unsplash.com/photo-1514342959091-6d34bfec5455",
    description: "Aromatic leaves used to flavor soups, stews, and Mediterranean dishes.",
    careLevel: "Medium",
    size: "Medium"
  },
  {
    name: "Oregano",
    price: 100,
    categories: ["Outdoor", "Herb", "Culinary"],
    stock: 65,
    image: "https://images.unsplash.com/photo-1454023492550-5696f8ff10e1",
    description: "Popular herb in Mediterranean cuisine, adds robust flavor to dishes.",
    careLevel: "Easy",
    size: "Small"
  },
  {
    name: "Basil",
    price: 85,
    categories: ["Outdoor", "Herb", "Culinary"],
    stock: 90,
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b",
    description: "Sweet and aromatic herb, essential for Italian and Thai cuisine.",
    careLevel: "Easy",
    size: "Small"
  },
  {
    name: "Coriander",
    price: 75,
    categories: ["Outdoor", "Herb", "Culinary"],
    stock: 95,
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca",
    description: "Fresh herb with citrusy flavor, used in Mexican, Indian, and Middle Eastern dishes.",
    careLevel: "Easy",
    size: "Small"
  },
  {
    name: "Parsley",
    price: 80,
    categories: ["Outdoor", "Herb", "Culinary"],
    stock: 88,
    image: "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38",
    description: "Versatile herb used as garnish and flavoring in various cuisines.",
    careLevel: "Easy",
    size: "Small"
  },
  {
    name: "Dill",
    price: 70,
    categories: ["Outdoor", "Herb", "Culinary"],
    stock: 82,
    image: "https://images.unsplash.com/photo-1454023492550-5696f8ff10e1",
    description: "Feathery herb with anise-like flavor, perfect for fish dishes and pickling.",
    careLevel: "Easy",
    size: "Small"
  },
  {
    name: "Chives",
    price: 65,
    categories: ["Outdoor", "Herb", "Culinary"],
    stock: 78,
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b",
    description: "Mild onion-flavored herb, great for garnishing and adding subtle flavor.",
    careLevel: "Easy",
    size: "Small"
  },
  {
    name: "Marigold",
    price: 150,
    categories: ["Outdoor", "Flowering", "Garden"],
    stock: 50,
    image: "https://images.unsplash.com/photo-1514342959091-6d34bfec5455",
    description: "Bright orange and yellow flowers that add color and repel garden pests.",
    careLevel: "Easy",
    size: "Small"
  },
  {
    name: "Sunflower",
    price: 200,
    categories: ["Outdoor", "Flowering", "Garden"],
    stock: 35,
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308",
    description: "Tall, cheerful flowers that follow the sun and attract pollinators.",
    careLevel: "Easy",
    size: "Large"
  },
  {
    name: "Daisy",
    price: 120,
    categories: ["Outdoor", "Flowering", "Garden"],
    stock: 60,
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    description: "Simple and charming flowers that symbolize innocence and purity.",
    careLevel: "Easy",
    size: "Small"
  },
  {
    name: "Geranium",
    price: 180,
    categories: ["Outdoor", "Flowering", "Garden"],
    stock: 45,
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b",
    description: "Colorful flowers that bloom throughout the summer and are easy to care for.",
    careLevel: "Easy",
    size: "Medium"
  },
  {
    name: "Petunia",
    price: 110,
    categories: ["Outdoor", "Flowering", "Garden"],
    stock: 70,
    image: "https://images.unsplash.com/photo-1514342959091-6d34bfec5455",
    description: "Trailing flowers perfect for hanging baskets and garden borders.",
    careLevel: "Easy",
    size: "Small"
  },
  {
    name: "Begonia",
    price: 160,
    categories: ["Outdoor", "Flowering", "Garden"],
    stock: 40,
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308",
    description: "Beautiful flowers that thrive in partial shade and add color to gardens.",
    careLevel: "Medium",
    size: "Small"
  },
  {
    name: "Impatiens",
    price: 90,
    categories: ["Outdoor", "Flowering", "Garden", "Shade Loving"],
    stock: 85,
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    description: "Colorful flowers that bloom profusely in shady areas.",
    careLevel: "Easy",
    size: "Small"
  },
  {
    name: "Coleus",
    price: 130,
    categories: ["Outdoor", "Foliage", "Garden"],
    stock: 55,
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b",
    description: "Vibrant foliage plant with colorful leaves that add texture to gardens.",
    careLevel: "Easy",
    size: "Medium"
  },
  {
    name: "Caladium",
    price: 220,
    categories: ["Outdoor", "Foliage", "Garden"],
    stock: 25,
    image: "https://images.unsplash.com/photo-1514342959091-6d34bfec5455",
    description: "Stunning foliage plant with heart-shaped leaves in various colors.",
    careLevel: "Medium",
    size: "Medium"
  },
  {
    name: "Croton",
    price: 280,
    categories: ["Indoor", "Outdoor", "Foliage", "Tropical"],
    stock: 20,
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308",
    description: "Colorful tropical plant with variegated leaves that add drama to any space.",
    careLevel: "Medium",
    size: "Medium"
  },
  {
    name: "Dracaena",
    price: 320,
    categories: ["Indoor", "Air Purifying", "Foliage"],
    stock: 28,
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b",
    description: "Striking plant with sword-like leaves that purifies indoor air effectively.",
    careLevel: "Easy",
    size: "Large"
  },
  {
    name: "Philodendron",
    price: 380,
    categories: ["Indoor", "Air Purifying", "Tropical"],
    stock: 32,
    image: "https://images.unsplash.com/photo-1514342959091-6d34bfec5455",
    description: "Popular tropical plant with large, glossy leaves that thrive indoors.",
    careLevel: "Easy",
    size: "Large"
  },
  {
    name: "Anthurium",
    price: 450,
    categories: ["Indoor", "Flowering", "Tropical"],
    stock: 18,
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308",
    description: "Tropical plant with striking red flowers and glossy green leaves.",
    careLevel: "Medium",
    size: "Medium"
  },
  {
    name: "Bromeliad",
    price: 290,
    categories: ["Indoor", "Tropical", "Flowering"],
    stock: 25,
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    description: "Exotic tropical plant with colorful bracts and unique growth habit.",
    careLevel: "Medium",
    size: "Medium"
  },
  {
    name: "Bird of Paradise",
    price: 680,
    categories: ["Indoor", "Outdoor", "Tropical", "Flowering"],
    stock: 12,
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b",
    description: "Dramatic tropical plant with bird-like flowers and large banana-like leaves.",
    careLevel: "Medium",
    size: "Large"
  }
];

const seedDatabase = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGO_URI);
    console.log('🌿 Connected to MongoDB');

    // Clear existing plants
    await Plant.deleteMany({});
    console.log('🗑️ Cleared existing plants');

    // Insert new plants
    const createdPlants = await Plant.insertMany(plants);
    console.log(`✅ Successfully seeded ${createdPlants.length} plants`);

    // Disconnect from MongoDB
    await mongoose.disconnect();
    console.log('🔌 Disconnected from MongoDB');

    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase();

