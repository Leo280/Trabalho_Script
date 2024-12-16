import { Request, Response } from 'express';

class MainController {
  getHome(req: Request, res: Response) {
    res.render('main');
  }
}

export default new MainController();
