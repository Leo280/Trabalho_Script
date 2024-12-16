import { Router } from 'express';
import { bookingRouter } from './booking-routes';
import { drinkRouter } from './drink-routes';
import { userRouter } from './user-routes';
import mainController from '../controllers/main-controller';

export const mainRouter = Router();

mainRouter.get('/home', mainController.getHome);
mainRouter.use('/users', userRouter);
mainRouter.use('/drinks', drinkRouter);
mainRouter.use('/bookings', bookingRouter);
