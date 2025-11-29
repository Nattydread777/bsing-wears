// User Model
import mongoose from 'mongoose';
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  isAdmin: Boolean,
});
export default mongoose.model('User', userSchema);
