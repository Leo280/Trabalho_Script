import { Router } from 'express';

export const drinkRouter = Router();

drinkRouter.get('/', (req, res) => {
  res.send('Hello Drinks');
});
