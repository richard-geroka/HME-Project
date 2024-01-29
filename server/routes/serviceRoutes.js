/* eslint-disable import/extensions */
import express from 'express';
import { addService, getServices } from '../controllers/serviceController.js';

const router = express.Router();

router.route('/').post(addService).get(getServices);

export default router;
