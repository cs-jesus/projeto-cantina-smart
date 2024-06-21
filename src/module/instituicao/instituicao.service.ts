import { Injectable } from '@nestjs/common';
import { CreateInstituicaoDto } from './dto/create-instituicao.dto';
import { UpdateInstituicaoDto } from './dto/update-instituicao.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class InstituicaoService {

  constructor(private readonly prisma: PrismaService) {}

  create(data: CreateInstituicaoDto) {
    return this.prisma.instituicao.create({ data });
  }

  findAll() {
    return this.prisma.instituicao.findMany();
  }

  findOne(id: number) {
    return this.prisma.instituicao.findUnique({
      where: { id },
    });
  }

  update(id: number, data: UpdateInstituicaoDto) {
    return this.prisma.instituicao.update({
      where: { id },
      data,
    });
  }

  remove(id: number) {
    return this.prisma.instituicao.delete({
      where: { id },
    });
  }
}
