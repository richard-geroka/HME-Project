/* eslint-disable import/extensions */
import express from 'express';
import {
  addService,
  deleteService,
  getServices,
  updateService,
} from '../controllers/serviceController.js';

const router = express.Router();

router.route('/').post(addService).get(getServices);

router.route('/:id').patch(updateService).delete(deleteService);

export default router;
