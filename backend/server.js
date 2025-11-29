// Entry point for BSING Wears backend


import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('BSING Wears Backend API Running');
});


import shopRoutes from './routes/shop.js';
import schoolRoutes from './routes/school.js';
import authRoutes from './routes/auth.js';
import brandRoutes from './routes/brand.js';

app.use('/api/shop', shopRoutes);
app.use('/api/school', schoolRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/brand', brandRoutes);


app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
