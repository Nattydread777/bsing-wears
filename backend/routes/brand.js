import express from 'express';
import { getShowrooms, getAppointments, getMedia } from '../controllers/brandController.js';
const router = express.Router();

router.get('/showrooms', getShowrooms);
router.get('/appointments', getAppointments);
router.get('/media', getMedia);

export default router;
