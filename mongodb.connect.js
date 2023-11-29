import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

export async function connect() {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
    });
    console.log('Connected');
  } catch (err) {
    console.error('Error connecting to mongodb');
    console.error(err);
  }
}
