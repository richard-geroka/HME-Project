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

  if (!user || !(await user.correctPassword(password, user.password))) {
    return next(
      new AppError('Incorrect username or password. Please try again!', 401),
    );
  }
  res.status(200).json({
    status: 'success',
    message: 'You are now logged in!',
  });
});
