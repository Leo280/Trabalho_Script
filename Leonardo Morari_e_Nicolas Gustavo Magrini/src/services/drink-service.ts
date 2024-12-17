import { CreateDrinkDto, DrinkResponseDto } from '../models/dtos/drink-dto';

export interface DrinkService {
  create(payload: CreateDrinkDto): Promise<void>;
  findAll(): Promise<DrinkResponseDto[] | null>;
}
