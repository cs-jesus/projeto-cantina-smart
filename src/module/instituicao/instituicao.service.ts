import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateInstituicaoDto } from './dto/create-instituicao.dto';
import { UpdateInstituicaoDto } from './dto/update-instituicao.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Instituicao } from './entities/instituicao.entity';
import { Prisma } from '@prisma/client';

@Injectable()
export class InstituicaoService {

  constructor(private readonly prisma: PrismaService) { }

  async create(data: CreateInstituicaoDto): Promise<Instituicao> {

    const createData: Prisma.InstituicaoCreateInput = {
      nome: data.nome,
      sigla: data.sigla,
      tipoInstituicao: {
        connect: { id: data.fk_tipo },
      },
    };

    return await this.prisma.instituicao.create({
      data: createData,
      include: {
        tipoInstituicao: true,
      }
    });
  };

  async getAll(): Promise<Instituicao[]> {
    return await this.prisma.instituicao.findMany({
      include: {
        tipoInstituicao: true,
      },
    });
  }

  async getById(id: number): Promise<Instituicao | null> {
    return await this.prisma.instituicao.findUnique({
      where: { id },
      include: {
        tipoInstituicao: true,
      },
    });
  }


  async update(id: number, data: UpdateInstituicaoDto): Promise<Instituicao> {

    const createData: Prisma.InstituicaoCreateInput = {
      nome: data.nome,
      sigla: data.sigla,
      tipoInstituicao: {
        connect: { id: data.fk_tipo },
      },
    };

    return await this.prisma.instituicao.create({
      data: createData,
      include: {
        tipoInstituicao: true,
      }
    });
  };

  async remove(id: number): Promise<Instituicao> {
    return await this.prisma.instituicao.delete({
      where: { id },
      include: {
        tipoInstituicao: true,
      },
    });
  }
}
