import mongoose from 'mongoose';

const IssueSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  status: {
    type: String,
    enum: ['To Do', 'In Progress', 'Done'],
    default: 'To Do',
  },
  priority: {
    type: String,
    enum: ['Low', 'Medium', 'High'],
    required: true,
  },
  project: { type: mongoose.Schema.Types.ObjectId, ref: 'Project', required: true },
}, { timestamps: true });

export default mongoose.model('Issue', IssueSchema);
