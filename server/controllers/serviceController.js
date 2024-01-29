/* eslint-disable import/extensions */
import catchAsync from '../utils/catchAsync.js';
import AppError from '../utils/appError.js';
import Service from '../models/serviceModel.js';

const addService = catchAsync(async (req, res, next) => {
  const service = await Service.create({
    service: req.body.service,
    description: req.body.description,
    photo: req.body.photo,
  });

  res.status(201).json({
    status: 'success',
    message: 'Service added successfully!',
    service,
  });
});

export default addService;
