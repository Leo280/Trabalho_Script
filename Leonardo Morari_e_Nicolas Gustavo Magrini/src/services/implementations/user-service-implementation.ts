import bcrypt from 'bcrypt';
import { CreateUserDto, LoginUserDto, UserResponseDto } from '../../models/dtos/user-dto';
import { KyselyUserRepository } from '../../repositories/implementations/user-kysely-repository';
import { UserRepository } from '../../repositories/user-repository';
import { UserService } from '../user-service';
import { UserModel } from '../../models/user-model';

export class UserServiceImpl implements UserService {
  private repository: UserRepository;

  constructor() {
    this.repository = new KyselyUserRepository();
  }

  async create(payload: CreateUserDto) {
    const { name, email, password } = payload;
    const user = await this.repository.findUserByEmail(email);
    if (user) {
      throw new Error('Usuário já existente');
    }
    const hashPassword = await bcrypt.hash(password, 10);

    await this.repository.create({ name, email, password: hashPassword });
  }

  async login(payload: LoginUserDto): Promise<UserResponseDto | null> {
    const { email, password } = payload;

    const userDB = await this.repository.findUserByEmail(email);

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
      role: userDB.role,
    };

    return output;
  }

  async findByEmail(email: String): Promise<UserModel | null> {
    const user = await this.repository.findUserByEmail(email);

    if (!user) {
      return null;
    }
    return user;
  }
}
