import { Injectable } from '@nestjs/common';
import { CreateFuncaoDto } from './dto/create-funcao.dto';
import { UpdateFuncaoDto } from './dto/update-funcao.dto';

@Injectable()
export class FuncaoService {
  create(createFuncaoDto: CreateFuncaoDto) {
    return 'This action adds a new funcao';
  }

  findAll() {
    return `This action returns all funcao`;
  }

  findOne(id: number) {
    return `This action returns a #${id} funcao`;
  }

  update(id: number, updateFuncaoDto: UpdateFuncaoDto) {
    return `This action updates a #${id} funcao`;
  }

  remove(id: number) {
    return `This action removes a #${id} funcao`;
  }
}
