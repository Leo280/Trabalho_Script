import { Request, Response } from 'express';
import { UserServiceImpl } from '../services/implementations/user-service-implementation';
import { UserService } from '../services/user-service';

class UserController {
  getRegisterForm(req: Request, res: Response) {
    res.render('cadastro');
  }

  async register(req: Request, res: Response) {
    const { name, email, password } = req.body;
    const service: UserService = new UserServiceImpl();

    try {
      await service.create({ name: name, email, password });
      res.redirect('/users/login');
    } catch (error) {
      res.render('register', { error: 'Erro ao cadastrar o usuário' });
    }
  }

  getLoginForm(req: Request, res: Response) {
    res.render('login');
  }

  async login(req: Request, res: Response) {
    const { email, password } = req.body;
    const service: UserService = new UserServiceImpl();

    try {
      const user = await service.login({ email, password });
      if (user) {
        req.email = user.email;
        res.redirect('/home');
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Ocorreu um erro ao fazer login';
      res.render('login', { error: errorMessage });
    }
  }
}

export default new UserController();
