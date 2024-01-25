/* eslint-disable import/extensions */
import 'dotenv/config';
import mongoose from 'mongoose';
import app from './app.js';

// Handles uncaught exception error
process.on('uncaughtException', (err) => {
  console.log('UNCAUGHT EXCEPTION! Shutting down...');
  console.log(err.name, err.message);
  process.exit(1);
});

// DB CONNECTION CONFIG
const DB = process.env.DB_URL.replace('<password>', process.env.DB_PASSWORD);

mongoose.connect(DB).then(() => console.log('DB CONNECTION SUCCESSFULL!'));

const server = app.listen(process.env.PORT, () => {
  console.log('SERVER STARTED!');
});

// Handles unhandled rejection error
process.on('unhandledRejection', (err) => {
  console.log('UNHANDLED REJECTION! Shutting down...');
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});
