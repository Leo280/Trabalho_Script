import { Router } from 'express';

export const bookingRouter = Router();

bookingRouter.get('/', (req, res) => {
  res.send('Hello Bookings');
});
