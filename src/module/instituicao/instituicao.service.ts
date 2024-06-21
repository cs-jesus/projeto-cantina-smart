import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateInstituicaoDto } from './dto/create-instituicao.dto';
import { UpdateInstituicaoDto } from './dto/update-instituicao.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Instituicao } from './entities/instituicao.entity';

@Injectable()
export class InstituicaoService {

  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateInstituicaoDto): Promise<Instituicao> {

    try {

      if (typeof data.nome !== 'string') {
        throw new Error('O campo deve receber uma string');
      }

      return await this.prisma.instituicao.create({ data });


    } catch (error) {
      console.error("Erro na criação:", error);
      throw new InternalServerErrorException("Erro na criação de uma instituição");
    }
  }

  async findAll(): Promise<Instituicao[]> {
    return await this.prisma.instituicao.findMany();
  }

  async findOne(id: number): Promise<Instituicao | null> {
    return await this.prisma.instituicao.findUnique({
      where: { id },
    });
  }

  async update(id: number, data: UpdateInstituicaoDto): Promise<Instituicao> {
    return await this.prisma.instituicao.update({
      where: { id },
      data,
    });
  }

  async remove(id: number): Promise<Instituicao> {
    return await this.prisma.instituicao.delete({
      where: { id },
    });
  }
}
