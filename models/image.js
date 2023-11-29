import mongoose from 'mongoose';

const ImageSchema = new mongoose.Schema(
  {
    label: {
      type: String,
      required: true,
    },
    filename: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
  },
  {
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
      },
      versionKey: false,
    },
  }
);

export const ImageModel = mongoose.model('Image', ImageSchema);
