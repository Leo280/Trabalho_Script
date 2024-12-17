import { Request, Response } from 'express';
import { BookingService } from '../services/booking-service';
import { BookingServiceImpl } from '../services/implementations/booking-service-implementation';

class BookingController {
  async create(req: Request, res: Response) {
    const bookingService: BookingService = new BookingServiceImpl();
    const { name, cpf, date, time } = req.body;
    if (!req.session.email) {
      return res.redirect('/users/login');
    }

    const userId = req.session.userId!;
    await bookingService.create({ name, cpf, date, time, userId });

    res.redirect('/home');
  }
}

export default new BookingController();
