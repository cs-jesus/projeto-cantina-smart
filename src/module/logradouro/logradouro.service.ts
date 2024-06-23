import { Injectable } from '@nestjs/common';
import { CreateLogradouroDto } from './dto/create-logradouro.dto';
import { UpdateLogradouroDto } from './dto/update-logradouro.dto';

@Injectable()
export class LogradouroService {
  create(createLogradouroDto: CreateLogradouroDto) {
    return 'This action adds a new logradouro';
  }

  findAll() {
    return `This action returns all logradouro`;
  }

  findOne(id: number) {
    return `This action returns a #${id} logradouro`;
  }

  update(id: number, updateLogradouroDto: UpdateLogradouroDto) {
    return `This action updates a #${id} logradouro`;
  }

  remove(id: number) {
    return `This action removes a #${id} logradouro`;
  }
}
