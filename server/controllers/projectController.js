/* eslint-disable import/extensions */
import Project from '../models/projectModel.js';
import catchAsync from '../utils/catchAsync.js';
import AppError from '../utils/appError.js';

const addProject = catchAsync(async (req, res, next) => {
  const newProject = await Project.create({
    projectName: req.body.projectName,
    location: req.body.location,
    description: req.body.description,
    dateStarted: req.body.dateStarted,
    dateCompleted: req.body.dateCompleted,
    photos: req.body.photos,
  });

  res.status(201).json({
    status: 'success',
    message: 'Project added successfully!',
    newProject,
  });
});

export default addProject;
