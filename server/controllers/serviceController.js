/* eslint-disable import/extensions */
import catchAsync from '../utils/catchAsync.js';
import AppError from '../utils/appError.js';
import Service from '../models/serviceModel.js';

export const addService = catchAsync(async (req, res, next) => {
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

export const getServices = catchAsync(async (req, res, next) => {
  const services = await Service.find({});

  res.status(200).json({
    status: 'success',
    result: services.length,
    services,
  });
});

export const updateService = catchAsync(async (req, res, next) => {
  const service = await Service.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!service) {
    return next(new AppError('No service found with that id', 404));
  }

  res.status(200).json({
    status: 'success',
    service,
  });
});

export const deleteService = catchAsync(async (req, res, next) => {
  const service = await Service.findByIdAndDelete(req.params.id);

  if (!service) {
    return next(new AppError('No service found with that id', 404));
  }

  res.status(204).json({
    status: 'success',
    message: 'Service deleted successfully',
  });
});
