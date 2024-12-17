import { db } from '../../db/conn';
import { CreateDrinkDto, DrinkResponseDto } from '../../models/dtos/drink-dto';
import { UserResponseDto } from '../../models/dtos/user-dto';
import { DrinkRepository } from '../drink-repository';

export class KyselyDrinkRepository implements DrinkRepository {
  async create(payload: CreateDrinkDto): Promise<void> {
    const { name, description, imgName } = payload;
    await db
      .insertInto('drinks')
      .values({
        id: crypto.randomUUID().toString(),
        name,
        description,
        imgName,
      })
      .execute();
  }

  async findAll(): Promise<DrinkResponseDto[] | null> {
    const drinks = await db.selectFrom('drinks').select(['id', 'name', 'description', 'imgName']).execute();

    if (!drinks) {
      return null;
    }

    return drinks;
  }
}
