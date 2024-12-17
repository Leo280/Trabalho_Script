import { Request, Response } from 'express';
import { DrinkService } from '../services/drink-service';
import { DrinkServiceImpl } from '../services/implementations/drink-service-implementation';

class MainController {
  async getHome(req: Request, res: Response) {
    if (!req.session.email) {
      return res.redirect('/users/register');
    }
    const drinkService: DrinkService = new DrinkServiceImpl();
    const drinks = await drinkService.findAll();
    const name = req.session.nameUser;
    return res.render('main', { loggedName: name, drinks: drinks, isAdmin: req.session.isAdmin });
  }

  logout(req: Request, res: Response) {
    req.session.destroy((err) => {
      if (!err) {
        return res.redirect('/users/login');
      }
    });
  }
}

export default new MainController();
