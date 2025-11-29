import express from 'express';
import { getEnrollments } from '../controllers/schoolController.js';
const router = express.Router();

router.get('/enrollments', getEnrollments);

export default router;
