import express from 'express';
import * as imagesController from '../controllers/images.controller.js';
import { body } from 'express-validator';
import { validateRequest } from '../middlewares/validation-request.js';

export const router = express.Router();

router.get('/', imagesController.getAllImages);

router.post('/', imagesController.uploadImage);

router.delete('/:id', imagesController.deleteImage);
