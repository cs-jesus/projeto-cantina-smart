import { Injectable } from '@nestjs/common';
import { CreateUnidadeMedidaDto } from './dto/create-unidade-medida.dto';
import { UpdateUnidadeMedidaDto } from './dto/update-unidade-medida.dto';

@Injectable()
export class UnidadeMedidaService {
  create(createUnidadeMedidaDto: CreateUnidadeMedidaDto) {
    return 'This action adds a new unidadeMedida';
  }

  findAll() {
    return `This action returns all unidadeMedida`;
  }

  findOne(id: number) {
    return `This action returns a #${id} unidadeMedida`;
  }

  update(id: number, updateUnidadeMedidaDto: UpdateUnidadeMedidaDto) {
    return `This action updates a #${id} unidadeMedida`;
  }

  remove(id: number) {
    return `This action removes a #${id} unidadeMedida`;
  }
}
