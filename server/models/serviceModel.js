import mongoose from 'mongoose';

const serviceSchema = new mongoose.Schema({
  service: {
    type: String,
    required: [true, 'Please provide a service'],
  },
  description: {
    type: String,
    required: [true, 'Please provide a short description'],
  },
  photo: {
    type: String,
    required: [true, 'Please provide a photo'],
  },
});

const Service = mongoose.model('Service', serviceSchema);

export default Service;
