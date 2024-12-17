import { CreateUserDto, LoginUserDto, UserResponseDto } from '../models/dtos/user-dto';
import { UserModel } from '../models/user-model';

export interface UserService {
  create(payload: CreateUserDto): Promise<void>;
  login(payload: LoginUserDto): Promise<UserResponseDto | null>;
  findByEmail(email: string): Promise<UserModel | null>;
}
