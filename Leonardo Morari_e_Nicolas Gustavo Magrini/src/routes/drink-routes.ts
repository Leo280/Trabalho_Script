import { Router } from 'express';
import { upload } from '../utils/multer';
import drinkController from '../controllers/drink-controller';

export const drinkRouter = Router();

drinkRouter.post('/', upload.single('image'), drinkController.create);
