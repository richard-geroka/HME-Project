/* eslint-disable import/extensions */
import express from 'express';
import { addProject, getProjects } from '../controllers/projectController.js';

const router = express.Router();

router.route('/').post(addProject).get(getProjects);

export default router;
