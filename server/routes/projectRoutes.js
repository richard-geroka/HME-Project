/* eslint-disable import/extensions */
import express from 'express';
import {
  addProject,
  getProjects,
  updateProject,
} from '../controllers/projectController.js';

const router = express.Router();

router.route('/').post(addProject).get(getProjects);

router.route('/:id').patch(updateProject);

export default router;
