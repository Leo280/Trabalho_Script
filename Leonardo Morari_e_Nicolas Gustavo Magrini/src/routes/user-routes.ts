import { Router } from 'express';
import userController from '../controllers/user-controller';
import { redirectIfAuthenticated } from '../middlewares/user-middlewares';

export const userRouter = Router();

userRouter.post('/register', redirectIfAuthenticated, userController.register);
userRouter.get('/register', userController.getRegisterForm);
userRouter.get('/login', redirectIfAuthenticated, userController.getLoginForm);
userRouter.post('/login', userController.login);
