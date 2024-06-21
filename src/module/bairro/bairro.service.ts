import { Injectable } from '@nestjs/common';
import { CreateBairroDto } from './dto/create-bairro.dto';
import { UpdateBairroDto } from './dto/update-bairro.dto';

@Injectable()
export class BairroService {
  create(createBairroDto: CreateBairroDto) {
    return 'This action adds a new bairro';
  }

  findAll() {
    return `This action returns all bairro`;
  }

  findOne(id: number) {
    return `This action returns a #${id} bairro`;
  }

  update(id: number, updateBairroDto: UpdateBairroDto) {
    return `This action updates a #${id} bairro`;
  }

  remove(id: number) {
    return `This action removes a #${id} bairro`;
  }
}
