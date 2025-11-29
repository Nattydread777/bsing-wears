// Auth Controller
import User from '../models/User.js';
import jwt from 'jsonwebtoken';

// GET profile
export const getProfile = (req, res) => {
  res.json({ user: req.user });
};

// LOGIN
export const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user || user.password !== password) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }
  const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, process.env.JWT_SECRET || 'secret', { expiresIn: '7d' });
  res.json({ token, user });
};

// SIGNUP
export const signup = async (req, res) => {
  const { name, email, password } = req.body;
  const exists = await User.findOne({ email });
  if (exists) return res.status(400).json({ message: 'User already exists' });
  const user = new User({ name, email, password });
  await user.save();
  const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, process.env.JWT_SECRET || 'secret', { expiresIn: '7d' });
  res.status(201).json({ token, user });
};

// GET all users (admin only)
export const getUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};
