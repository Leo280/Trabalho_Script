import { db } from '../../db/conn';
import { CreateUserDto, LoginUserDto } from '../../models/dtos/user-dto';
import { UserModel } from '../../models/user-model';
import { UserRepository } from '../user-repository';

export class KyselyUserRepository implements UserRepository {
  async create(payload: CreateUserDto): Promise<void> {
    const { name, email, password } = payload;
    console.log(`Name repo: ${name}`);
    await db
      .insertInto('users')
      .values({
        id: crypto.randomUUID().toString(),
        name,
        email,
        password,
        createdAt: new Date().toISOString(),
      })
      .execute();
  }

  async findUserByEmail(email: string): Promise<UserModel | null> {
    const user = await db.selectFrom('users').selectAll().where('email', '=', email).executeTakeFirst();

    if (!user) {
      return null;
    }

    const output: UserModel = {
      id: user.id,
      name: user.name,
      email: user.email,
      password: user.password,
      createdAt: user.createdAt,
    };

    return output;
  }
}
