import { Injectable } from '@nestjs/common';
import { CreateFuncionarioFilialDto } from './dto/create-funcionario-filial.dto';
import { UpdateFuncionarioFilialDto } from './dto/update-funcionario-filial.dto';

@Injectable()
export class FuncionarioFilialService {
  create(createFuncionarioFilialDto: CreateFuncionarioFilialDto) {
    return 'This action adds a new funcionarioFilial';
  }

  findAll() {
    return `This action returns all funcionarioFilial`;
  }

  findOne(id: number) {
    return `This action returns a #${id} funcionarioFilial`;
  }

  update(id: number, updateFuncionarioFilialDto: UpdateFuncionarioFilialDto) {
    return `This action updates a #${id} funcionarioFilial`;
  }

  remove(id: number) {
    return `This action removes a #${id} funcionarioFilial`;
  }
}
