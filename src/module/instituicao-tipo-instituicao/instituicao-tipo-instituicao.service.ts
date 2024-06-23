import { Injectable } from '@nestjs/common';
import { CreateInstituicaoTipoInstituicaoDto } from './dto/create-instituicao-tipo-instituicao.dto';
import { UpdateInstituicaoTipoInstituicaoDto } from './dto/update-instituicao-tipo-instituicao.dto';

@Injectable()
export class InstituicaoTipoInstituicaoService {
  create(createInstituicaoTipoInstituicaoDto: CreateInstituicaoTipoInstituicaoDto) {
    return 'This action adds a new instituicaoTipoInstituicao';
  }

  findAll() {
    return `This action returns all instituicaoTipoInstituicao`;
  }

  findOne(id: number) {
    return `This action returns a #${id} instituicaoTipoInstituicao`;
  }

  update(id: number, updateInstituicaoTipoInstituicaoDto: UpdateInstituicaoTipoInstituicaoDto) {
    return `This action updates a #${id} instituicaoTipoInstituicao`;
  }

  remove(id: number) {
    return `This action removes a #${id} instituicaoTipoInstituicao`;
  }
}
