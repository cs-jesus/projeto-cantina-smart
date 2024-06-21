import { Injectable } from '@nestjs/common';
import { CreateTipoInstituicaoAssociativaDto } from './dto/create-tipo-instituicao-associativa.dto';
import { UpdateTipoInstituicaoAssociativaDto } from './dto/update-tipo-instituicao-associativa.dto';

@Injectable()
export class TipoInstituicaoAssociativaService {
  create(createTipoInstituicaoAssociativaDto: CreateTipoInstituicaoAssociativaDto) {
    return 'This action adds a new tipoInstituicaoAssociativa';
  }

  findAll() {
    return `This action returns all tipoInstituicaoAssociativa`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tipoInstituicaoAssociativa`;
  }

  update(id: number, updateTipoInstituicaoAssociativaDto: UpdateTipoInstituicaoAssociativaDto) {
    return `This action updates a #${id} tipoInstituicaoAssociativa`;
  }

  remove(id: number) {
    return `This action removes a #${id} tipoInstituicaoAssociativa`;
  }
}
