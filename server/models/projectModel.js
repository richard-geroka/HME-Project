import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
  projectName: {
    type: String,
    required: [true, 'Please provide a project name'],
  },
  location: {
    type: String,
    required: [true, 'Please provide a project location'],
  },
  description: {
    type: String,
    required: [true, 'Please provide a short description about the project'],
  },
  duration: { type: String, required: [true, 'Please provide duration'] },
  photos: [String],
});

const Project = mongoose.model('Project', projectSchema);

export default Project;
