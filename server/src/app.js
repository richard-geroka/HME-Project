/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/extensions */
import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { rateLimit } from 'express-rate-limit';
import helmet from 'helmet';
import mongoSanitize from 'express-mongo-sanitize';
import { xss } from 'express-xss-sanitizer';
import hpp from 'hpp';
import cookieParser from 'cookie-parser';

import globalErrorHandler from '../controllers/errorController.js';
import userRouter from '../routes/userRoutes.js';
import projectRouter from '../routes/projectRoutes.js';
import serviceRouter from '../routes/serviceRoutes.js';

const app = express();
app.use(cors());

// Global Middlewares

// Serving Static Files
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, 'public')));

// Set http security
app.use(helmet());

// Development Logging
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Limit request from same IP
const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: 'Too many request from this IP. Please try again in 1hr.',
});
app.use('/api', limiter);

// Body Parser & Cookie Parser
app.use(express.json({ limit: '10kb' }));
app.use(cookieParser());

// Data sanitization against NOSQL query injection
app.use(mongoSanitize());

// Data sanitization against XSS
app.use(xss());

// Prevent params pollution
app.use(hpp());

// Routes
app.use('/api/user', userRouter);
app.use('/api/project', projectRouter);
app.use('/api/service', serviceRouter);

// Global Error Handler
app.use(globalErrorHandler);

export default app;
