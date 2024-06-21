import { Injectable } from '@nestjs/common';
import { CreateCidadeDto } from './dto/create-cidade.dto';
import { UpdateCidadeDto } from './dto/update-cidade.dto';

@Injectable()
export class CidadeService {
  create(createCidadeDto: CreateCidadeDto) {
    return 'This action adds a new cidade';
  }

  findAll() {
    return `This action returns all cidade`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cidade`;
  }

  update(id: number, updateCidadeDto: UpdateCidadeDto) {
    return `This action updates a #${id} cidade`;
  }

  remove(id: number) {
    return `This action removes a #${id} cidade`;
  }
}
