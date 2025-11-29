// Product Model
import mongoose from 'mongoose';
const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  category: String,
  image: String,
  featured: Boolean,
});
export default mongoose.model('Product', productSchema);
