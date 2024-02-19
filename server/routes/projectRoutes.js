/* eslint-disable import/extensions */
import express from 'express';
import {
  addProject,
  deleteProject,
  getProject,
  getProjects,
  resizeImages,
  updateProject,
  uploadProjectImages,
} from '../controllers/projectController.js';
import { protectRoute } from '../controllers/authController.js';

const router = express.Router();

router
  .route('/')
  .post(protectRoute, uploadProjectImages, resizeImages, addProject)
  .get(getProjects);

router
  .route('/:id')
  .get(protectRoute, getProject)
  .patch(protectRoute, updateProject)
  .delete(protectRoute, deleteProject);

export default router;
