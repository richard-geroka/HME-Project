/* eslint-disable import/extensions */
import express from 'express';
import addService from '../controllers/serviceController.js';

const router = express.Router();

router.route('/').post(addService);

export default router;
