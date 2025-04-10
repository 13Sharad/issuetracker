import mongoose from 'mongoose';
import dotenv from 'dotenv';
import app from './app';

dotenv.config();

mongoose.connect(process.env.MONGO_URI!)
  .then(() => {
    app.listen(5000, () => {
      console.log('Server running at http://localhost:5000');
    });
  })
  .catch(err => console.error('DB Connection Failed:', err));
