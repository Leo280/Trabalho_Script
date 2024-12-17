import { db } from '../../db/conn';
import { BookingModel } from '../../models/booking-model';
import { CreateBookingDto } from '../../models/dtos/booking-dto';
import { UserModel } from '../../models/user-model';
import { BookingRepository } from '../booking-repository';

export class KyselyBookingRepository implements BookingRepository {
  async create(payload: CreateBookingDto): Promise<void> {
    const { name, cpf, date, time, userId } = payload;
    await db
      .insertInto('bookings')
      .values({
        id: crypto.randomUUID().toString(),
        name,
        cpf,
        date,
        time,
        userId,
      })
      .execute();
  }
}
