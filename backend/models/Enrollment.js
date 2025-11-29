// Enrollment Model
import mongoose from 'mongoose';
const enrollmentSchema = new mongoose.Schema({
  name: String,
  email: String,
  course: String,
  date: Date,
});
export default mongoose.model('Enrollment', enrollmentSchema);
