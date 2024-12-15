import { BookingModel } from './booking.model';
import { DrinkModel } from './drink.model';
import { UserModel } from './user.model';

//Kysely precisa desta interface para mapear no query builder
export interface Database {
  users: UserModel;
  bookings: BookingModel;
  drinks: DrinkModel;
}
