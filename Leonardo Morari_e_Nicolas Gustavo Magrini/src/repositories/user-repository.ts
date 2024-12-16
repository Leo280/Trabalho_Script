import { CreateUserDto } from '../models/dtos/user-dto';
import { UserModel } from '../models/user-model';

export interface UserRepository {
  create(payload: CreateUserDto): Promise<void>;
  findUserByEmail(email: String): Promise<UserModel | null>;
}
