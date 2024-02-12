/* eslint-disable import/extensions */
import express from 'express';
import {
  addProject,
  deleteProject,
  getProjects,
  updateProject,
  uploadProjectImages,
} from '../controllers/projectController.js';
import { protectRoute } from '../controllers/authController.js';

const router = express.Router();

// Protect routes below
router.use(protectRoute);

router.route('/').post(uploadProjectImages, addProject).get(getProjects);

router.route('/:id').patch(updateProject).delete(deleteProject);

export default router;
