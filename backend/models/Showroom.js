// Showroom Model
import mongoose from 'mongoose';
const showroomSchema = new mongoose.Schema({
  title: String,
  video: String,
  images: [String],
  description: String,
});
export default mongoose.model('Showroom', showroomSchema);
