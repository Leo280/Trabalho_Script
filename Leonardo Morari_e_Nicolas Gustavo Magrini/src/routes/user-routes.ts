import { Router } from 'express';
import userController from '../controllers/user-controller';

export const userRouter = Router();

userRouter.post('/register', userController.register);
userRouter.get('/register', userController.getRegisterForm);
userRouter.get('/login', userController.getLoginForm);
userRouter.post('/login', userController.login);
