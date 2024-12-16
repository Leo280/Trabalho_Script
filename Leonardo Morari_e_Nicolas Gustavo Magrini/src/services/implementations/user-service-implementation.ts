import bcrypt from 'bcrypt';
import { CreateUserDto, LoginUserDto, UserResponseDto } from '../../models/dtos/user-dto';
import { KyselyUserRepository } from '../../repositories/implementations/user-kysely-repository';
import { UserRepository } from '../../repositories/user-repository';
import { UserService } from '../user-service';

export class UserServiceImpl implements UserService {
  async create(payload: CreateUserDto) {
    const { name, email, password } = payload;
    const repository: UserRepository = new KyselyUserRepository();
    const hashPassword = await bcrypt.hash(password, 10);

    await repository.create({ name, email, password: hashPassword });
  }

  async login(payload: LoginUserDto): Promise<UserResponseDto | null> {
    const { email, password } = payload;
    const repository: UserRepository = new KyselyUserRepository();

    const userDB = await repository.findUserByEmail(email);

    if (!userDB) {
      throw new Error('Usuário e/ou senha incorretos');
    }
    if (!(await bcrypt.compare(password, userDB.password))) {
      throw new Error('Usuário e/ou senha incorretos');
    }

    const output: UserResponseDto = {
      id: userDB.id,
      name: userDB.name,
      email: userDB.email,
    };

    return output;
  }
}