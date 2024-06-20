import { Injectable } from '@nestjs/common';
import { CreateTipoInstituicaoDto } from './dto/create-tipo-instituicao.dto';
import { UpdateTipoInstituicaoDto } from './dto/update-tipo-instituicao.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TipoInstituicaoService {

  constructor(private readonly prisma: PrismaService) {}

  create(createTipoInstituicaoDto: CreateTipoInstituicaoDto) {
    return 'This action adds a new tipoInstituicao';
  }

  findAll() {
    return `This action returns all tipoInstituicao`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tipoInstituicao`;
  }

  update(id: number, updateTipoInstituicaoDto: UpdateTipoInstituicaoDto) {
    return `This action updates a #${id} tipoInstituicao`;
  }

  remove(id: number) {
    return `This action removes a #${id} tipoInstituicao`;
  }
}
