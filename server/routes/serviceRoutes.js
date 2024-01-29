/* eslint-disable import/extensions */
import express from 'express';
import {
  addService,
  deleteService,
  getServices,
  updateService,
} from '../controllers/serviceController.js';
import { protectRoute } from '../controllers/authController.js';

const router = express.Router();

// Protect routes below
router.use(protectRoute);

router.route('/').post(addService).get(getServices);

router.route('/:id').patch(updateService).delete(deleteService);

export default router;
