// Order Model
import mongoose from 'mongoose';
const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  products: Array,
  total: Number,
  status: String,
  createdAt: { type: Date, default: Date.now },
});
export default mongoose.model('Order', orderSchema);
