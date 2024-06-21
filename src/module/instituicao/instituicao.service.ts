import { Injectable } from '@nestjs/common';
import { CreateInstituicaoDto } from './dto/create-instituicao.dto';
import { UpdateInstituicaoDto } from './dto/update-instituicao.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class InstituicaoService {

  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateInstituicaoDto) {
    return await this.prisma.instituicao.create({ data });
  }

  async findAll() {
    return await this.prisma.instituicao.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.instituicao.findUnique({
      where: { id },
    });
  }

  async update(id: number, data: UpdateInstituicaoDto) {
    return await this.prisma.instituicao.update({
      where: { id },
      data,
    });
  }

  async remove(id: number) {
    return await this.prisma.instituicao.delete({
      where: { id },
    });
  }
}
