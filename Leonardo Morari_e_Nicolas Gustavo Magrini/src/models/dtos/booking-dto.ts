import { UserModel } from '../user-model';

export type CreateBookingDto = {
  name: string;
  cpf: string;
  date: string;
  time: string;
  userId: string;
};
