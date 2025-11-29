// Shop Controller
import Product from '../models/Product.js';

// GET all products
export const getProducts = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};

// CREATE product
export const createProduct = async (req, res) => {
  const product = new Product(req.body);
  await product.save();
  res.status(201).json(product);
};

// UPDATE product
export const updateProduct = async (req, res) => {
  const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(product);
};

// DELETE product
export const deleteProduct = async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ message: 'Product deleted' });
};

// GET collections (stub)
export const getCollections = (req, res) => {
  res.json({ collections: [] });
};
// GET cart (stub)
export const getCart = (req, res) => {
  res.json({ cart: [] });
};
// GET orders (stub)
export const getOrders = (req, res) => {
  res.json({ orders: [] });
};
