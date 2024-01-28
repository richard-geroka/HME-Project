/* eslint-disable import/extensions */
import Project from '../models/projectModel.js';
import catchAsync from '../utils/catchAsync.js';
import AppError from '../utils/appError.js';

export const addProject = catchAsync(async (req, res, next) => {
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

export const getProjects = catchAsync(async (req, res, next) => {
  const projects = await Project.find({});

  res.status(200).json({
    status: 'success',
    results: projects.length,
    projects,
  });
});
