import express from 'express';
import { getProfile, login, signup, getUsers } from '../controllers/authController.js';
import { protect, adminOnly } from '../middleware/authMiddleware.js';
const router = express.Router();

router.get('/profile', protect, getProfile);
router.post('/login', login);
router.post('/signup', signup);
router.get('/users', protect, adminOnly, getUsers);

export default router;
