import { Injectable } from '@nestjs/common';
import { CreateInstituicaoDto } from './dto/create-instituicao.dto';
import { UpdateInstituicaoDto } from './dto/update-instituicao.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Instituicao } from './entities/instituicao.entity';


@Injectable()
export class InstituicaoService {

  constructor(private prisma: PrismaService) { }

  async create(data: CreateInstituicaoDto): Promise<Instituicao> {
    return await this.prisma.instituicao.create({
      data: {
        nome: data.nome,
        sigla: data.sigla,
        tipoInstituicao: { connect: { id: data.tipoInstituicao.id } },
      },

      include: {
        tipoInstituicao: true,
      },
    }) as Instituicao;
  }

  async getAll(): Promise<Instituicao[]> {
    return await this.prisma.instituicao.findMany({
      include: {
        tipoInstituicao: true,
      },
    }) as Instituicao[];
  }

  async getById(id: number): Promise<Instituicao | null> {
    return await this.prisma.instituicao.findUnique({
      where: { id },
      include: {
        tipoInstituicao: true,
      },
    }) as Instituicao;
  }

  async update(id: number, data: UpdateInstituicaoDto): Promise<Instituicao> {
    return await this.prisma.instituicao.update({
      where: { id },
      data: {
        nome: data.nome,
        sigla: data.sigla,
        tipoInstituicao: {
          connect: { id: data.fk_tipo },
        },
      },
      include: {
        tipoInstituicao: true,
      },
    }) as Instituicao;
  }

  async remove(id: number): Promise<Instituicao> {
    return await this.prisma.instituicao.delete({
      where: { id },
      include: {
        tipoInstituicao: true,
      },
    }) as Instituicao;
  }
}
