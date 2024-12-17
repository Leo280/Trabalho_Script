import { BookingModel } from '../../models/booking-model';
import { CreateBookingDto } from '../../models/dtos/booking-dto';
import { BookingRepository } from '../../repositories/booking-repository';
import { KyselyBookingRepository } from '../../repositories/implementations/booking-kysely-repository';

export class BookingServiceImpl implements BookingServiceImpl {
  private bookingRepository: BookingRepository;

  constructor() {
    this.bookingRepository = new KyselyBookingRepository();
  }

  async create(payload: CreateBookingDto) {
    await this.bookingRepository.create(payload);
  }
}
