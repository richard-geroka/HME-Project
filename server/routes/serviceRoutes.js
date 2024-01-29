/* eslint-disable import/extensions */
import express from 'express';
import {
  addService,
  getServices,
  updateService,
} from '../controllers/serviceController.js';

const router = express.Router();

router.route('/').post(addService).get(getServices);

router.route('/:id').patch(updateService);

export default router;
