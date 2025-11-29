import express from 'express';
import { getProducts, createProduct, updateProduct, deleteProduct, getCollections, getCart, getOrders } from '../controllers/shopController.js';
import { protect, adminOnly } from '../middleware/authMiddleware.js';
const router = express.Router();

router.get('/products', getProducts);
router.post('/products', protect, adminOnly, createProduct);
router.put('/products/:id', protect, adminOnly, updateProduct);
router.delete('/products/:id', protect, adminOnly, deleteProduct);
router.get('/collections', getCollections);
router.get('/cart', getCart);
router.get('/orders', getOrders);

export default router;
