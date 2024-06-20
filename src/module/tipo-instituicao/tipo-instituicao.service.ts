import { Injectable } from '@nestjs/common';
import { CreateTipoInstituicaoDto } from './dto/create-tipo-instituicao.dto';
import { UpdateTipoInstituicaoDto } from './dto/update-tipo-instituicao.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TipoInstituicaoService {

  constructor(private readonly prisma: PrismaService) {}

  create(data: CreateTipoInstituicaoDto) {
    return this.prisma.tipoInstituicao.create({ data });
  }

  findAll() {
    return this.prisma.tipoInstituicao.findMany(); 
  }

  findOne(id: number) {
    return this.prisma.tipoInstituicao.findUnique({
      where: { id },
    });
  }

  update(id: number, updateTipoInstituicaoDto: UpdateTipoInstituicaoDto) {
    return `This action updates a #${id} tipoInstituicao`;
  }

  remove(id: number) {
    return this.prisma.tipoInstituicao.delete({
      where: { id },
    });
  }
}
