import { Request, Response } from 'express';
import { DrinkService } from '../services/drink-service';
import { DrinkServiceImpl } from '../services/implementations/drink-service-implementation';

class DrinkController {
  async create(req: Request, res: Response) {
    const drinkService: DrinkService = new DrinkServiceImpl();
    const { name, description } = req.body;
    const imgName = req.file?.filename!;

    await drinkService.create({ name, description, imgName });

    res.redirect('/home');
  }
}

export default new DrinkController();
