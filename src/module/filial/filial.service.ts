import { Injectable } from '@nestjs/common';
import { CreateFilialDto } from './dto/create-filial.dto';
import { UpdateFilialDto } from './dto/update-filial.dto';

@Injectable()
export class FilialService {
  create(createFilialDto: CreateFilialDto) {
    return 'This action adds a new filial';
  }

  findAll() {
    return `This action returns all filial`;
  }

  findOne(id: number) {
    return `This action returns a #${id} filial`;
  }

  update(id: number, updateFilialDto: UpdateFilialDto) {
    return `This action updates a #${id} filial`;
  }

  remove(id: number) {
    return `This action removes a #${id} filial`;
  }
}
