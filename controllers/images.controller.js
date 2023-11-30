import { ImageModel } from '../models/image.js';

export const uploadImage = async (req, res, next) => {
  const { label, filename } = req.body;
  const date = new Date(Date.now()).toISOString();

  const image = new ImageModel({ label, date, filename });
  await image.save();

  res.status(201).send(image);
};

export const getAllImages = async (req, res, next) => {
  const allPhotos = await ImageModel.find().sort({ date: -1 });
  res.status(200).send(allPhotos);
};

export const deleteImage = async (req, res, next) => {
  const { id } = req.params;
  try {
    const image = await ImageModel.findOne({ _id: id });
    if (!image) {
      return res.status(400).send({ errors: ['Image not exists'] });
    }

    await ImageModel.deleteOne({ _id: id });

    res.status(200).send({ deleted: true });
  } catch (e) {
    console.log(e);
    return res.status(400).send({ errors: ['Unexpected error'] });
  }
};
