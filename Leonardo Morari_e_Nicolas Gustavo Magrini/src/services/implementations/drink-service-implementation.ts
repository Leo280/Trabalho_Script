import { CreateDrinkDto, DrinkResponseDto } from '../../models/dtos/drink-dto';
import { DrinkRepository } from '../../repositories/drink-repository';
import { KyselyDrinkRepository } from '../../repositories/implementations/drink-kysely-repository';
import { DrinkService } from '../drink-service';

export class DrinkServiceImpl implements DrinkService {
  async create(payload: CreateDrinkDto): Promise<void> {
    const repository: DrinkRepository = new KyselyDrinkRepository();
    const { name, description, imgName } = payload;

    await repository.create({ name, description, imgName });
  }

  async findAll(): Promise<DrinkResponseDto[] | null> {
    const repository: DrinkRepository = new KyselyDrinkRepository();
    const drinks = await repository.findAll();
    return drinks;
  }
}
