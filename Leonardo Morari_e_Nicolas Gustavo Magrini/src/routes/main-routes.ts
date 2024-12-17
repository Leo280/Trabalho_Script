import { Router } from 'express';
import { bookingRouter } from './booking-routes';
import { drinkRouter } from './drink-routes';
import { userRouter } from './user-routes';
import mainController from '../controllers/main-controller';
import { isAuthenticated } from '../middlewares/user-middlewares';

export const mainRouter = Router();

mainRouter.get('/home', isAuthenticated, mainController.getHome);
mainRouter.post('/logout', isAuthenticated, mainController.logout)
mainRouter.use('/users', userRouter);
mainRouter.use('/drinks', drinkRouter);
mainRouter.use('/bookings', bookingRouter);
