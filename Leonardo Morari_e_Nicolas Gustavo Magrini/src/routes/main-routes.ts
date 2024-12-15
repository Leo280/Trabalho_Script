import { Router } from 'express';
import { bookingRouter } from './booking-routes';
import { drinkRouter } from './drink-routes';
import { userRouter } from './user-routes';

export const mainRouter = Router();

mainRouter.use('/users', userRouter);
mainRouter.use('/drinks', drinkRouter);
mainRouter.use('/bookings', bookingRouter);
