import { CreateUserDto, LoginUserDto, UserResponseDto } from '../models/dtos/user-dto';

export interface UserService {
  create(payload: CreateUserDto): Promise<void>;
  login(payload: LoginUserDto): Promise<UserResponseDto | null>;
}
