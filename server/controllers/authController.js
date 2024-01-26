/* eslint-disable import/extensions */
import User from '../models/userModel.js';
import catchAsync from '../utils/catchAsync.js';
import AppError from '../utils/appError.js';

export const signup = catchAsync(async (req, res, next) => {
  const newUser = await User.create({
    username: req.body.username,
    password: req.body.password,
  });
  res.status(201).json({
    status: 'success',
    message: 'Signed up successfully. Please log in!',
    newUser,
  });
});

export const login = catchAsync(async (req, res, next) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return next(new AppError('Please provide a username and password.', 400));
  }

  const user = await User.findOne({ username }).select('+password');
});
