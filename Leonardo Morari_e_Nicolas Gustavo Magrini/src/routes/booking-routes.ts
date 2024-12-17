import { Router } from 'express';
import bookingController from '../controllers/booking-controller';

export const bookingRouter = Router();

bookingRouter.post('/', bookingController.create);
