import mongoose from 'mongoose';

const plantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Plant name is required'],
    trim: true,
    maxlength: [100, 'Plant name cannot exceed 100 characters']
  },
  price: {
    type: Number,
    required: [true, 'Price is required'],
    min: [0, 'Price cannot be negative']
  },
  categories: [{
    type: String,
    required: [true, 'At least one category is required'],
    enum: ['Indoor', 'Outdoor', 'Succulent', 'Air Purifying', 'Home Decor', 'Flowering', 'Foliage', 'Herb', 'Cactus', 'Tropical', 'Low Maintenance', 'Trailing', 'Aromatic', 'Medicinal', 'Culinary', 'Ground Cover', 'Drought Tolerant', 'Good Luck', 'Pet Friendly', 'Statement Plant', 'Artistic', 'Low Light', 'Garden', 'Shade Loving', 'Tree', 'Mediterranean']
  }],
  stock: {
    type: Number,
    required: [true, 'Stock quantity is required'],
    min: [0, 'Stock cannot be negative'],
    default: 0
  },
  image: {
    type: String,
    required: [true, 'Plant image is required']
  },
  description: {
    type: String,
    maxlength: [500, 'Description cannot exceed 500 characters']
  },
  careLevel: {
    type: String,
    enum: ['Easy', 'Medium', 'Hard'],
    default: 'Easy'
  },
  size: {
    type: String,
    enum: ['Small', 'Medium', 'Large'],
    default: 'Medium'
  },
  isAvailable: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

// Index for search functionality
plantSchema.index({ name: 'text', categories: 'text' });

// Virtual for availability status
plantSchema.virtual('availabilityStatus').get(function() {
  return this.stock > 0 ? 'In Stock' : 'Out of Stock';
});

// Method to check if plant is available
plantSchema.methods.isInStock = function() {
  return this.stock > 0 && this.isAvailable;
};

const Plant = mongoose.model('Plant', plantSchema);

export default Plant;
