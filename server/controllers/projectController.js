/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/extensions */
import multer from 'multer';
import sharp from 'sharp';
import Project from '../models/projectModel.js';
import catchAsync from '../utils/catchAsync.js';
import AppError from '../utils/appError.js';

const multerStorage = multer.memoryStorage();

const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image')) {
    cb(null, true);
  } else {
    cb(new AppError('Please upload images only', 400), false);
  }
};

const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter,
});

export const uploadProjectImages = upload.array('photos', 10);

export const resizeImages = catchAsync(async (req, res, next) => {
  if (!req.files) return next();
  req.body.photos = [];
  await Promise.all(
    req.files.map(async (file, i) => {
      const fileName = `projects-${req.user.id}-${Date.now()}-${i + 1}.jpeg`;

      await sharp(file.buffer)
        .resize(400, 350, { fit: 'fill' })
        .toFormat('jpeg')
        .jpeg({ quality: 90 })
        .toFile(`./public/images/${fileName}`);

      req.body.photos.push(fileName);
    }),
  );

  next();
});

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

export const updateProject = catchAsync(async (req, res, next) => {
  const project = await Project.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!project) {
    return next(new AppError('No project found with that id', 404));
  }

  res.status(200).json({
    status: 'success',
    message: 'Project updated successfully!',
    project,
  });
});

export const deleteProject = catchAsync(async (req, res, next) => {
  const project = await Project.findByIdAndDelete(req.params.id);

  if (!project) {
    return next(new AppError('No project found with that id', 404));
  }

  res.status(204).json({
    status: 'success',
    message: 'Project deleted successfully!',
  });
});
