import express from 'express';
import * as imagesController from '../controllers/images.controller.js';
import { body } from 'express-validator';
import { validateRequest } from '../middlewares/validation-request.js';

export const router = express.Router();

router.get('/', imagesController.getAllImages);

router.post(
  '/',
  [
    body('label').notEmpty().withMessage('Label must be provided'),
    body('filename').notEmpty().withMessage('URL must be provided'),
  ],
  validateRequest,
  imagesController.uploadImage
);

router.delete('/:id', imagesController.deleteImage);
