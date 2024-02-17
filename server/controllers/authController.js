/* eslint-disable import/extensions */
import jwt from 'jsonwebtoken';
import { promisify } from 'util';
import User from '../models/userModel.js';
import catchAsync from '../utils/catchAsync.js';
import AppError from '../utils/appError.js';

const signToken = (id) =>
  jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });

const createSendToken = (user, statusCode, res) => {
  const token = signToken(user._id);

  const cookieOptions = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000,
    ),
    httpOnly: true,
  };

  if (process.env.NODE_ENV === 'production') cookieOptions.secure = true;

  res.cookie('jwt', token, cookieOptions);

  // remove password from output
  user.password = undefined;

  res.status(statusCode).json({
    status: 'success',
    user: user.username,
    token,
  });
};

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

  createSendToken(user, 200, res);
});

export const protectRoute = catchAsync(async (req, res, next) => {
  // Get token and check if it exist
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1];
  } else if (req.cookies.jwt) {
    token = req.cookies.jwt;
  }

  if (!token) {
    return next(new AppError('You are not logged in. Please log in', 401));
  }

  // Verify the token
  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

  // Check if user still exist
  const currentUser = await User.findById(decoded.id);

  if (!currentUser) {
    return next(new AppError('The user with this token no longer exist', 401));
  }

  // Grant access
  req.user = currentUser;
  next();
});
