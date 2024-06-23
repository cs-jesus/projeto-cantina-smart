import { Injectable } from '@nestjs/common';
import { CreateFisicaDto } from './dto/create-fisica.dto';
import { UpdateFisicaDto } from './dto/update-fisica.dto';

@Injectable()
export class FisicaService {
  create(createFisicaDto: CreateFisicaDto) {
    return 'This action adds a new fisica';
  }

  getAll() {
    return `This action returns all fisica`;
  }

  getById(id: number) {
    return `This action returns a #${id} fisica`;
  }

  update(id: number, updateFisicaDto: UpdateFisicaDto) {
    return `This action updates a #${id} fisica`;
  }

  remove(id: number) {
    return `This action removes a #${id} fisica`;
  }
}
