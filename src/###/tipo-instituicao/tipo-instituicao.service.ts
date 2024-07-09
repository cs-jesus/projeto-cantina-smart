import { Injectable } from '@nestjs/common';
import { CreateTipoInstituicaoDto } from './dto/create-tipo-instituicao.dto';
import { UpdateTipoInstituicaoDto } from './dto/update-tipo-instituicao.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { TipoInstituicao } from './entities/tipo-instituicao.entity';

@Injectable()
export class TipoInstituicaoService {

  constructor(private readonly prisma: PrismaService) { }

  async create(data: CreateTipoInstituicaoDto): Promise<TipoInstituicao> {
    return await this.prisma.tipoInstituicao.create({ data });
  }

  async getAll(): Promise<TipoInstituicao[]> {
    return await this.prisma.tipoInstituicao.findMany();
  }

  async getById(id: number): Promise<TipoInstituicao> {
    return await this.prisma.tipoInstituicao.findUnique({
      where: { id },
    });
  }

  async existsDescricao(descricao: string): Promise<boolean> {
    const exists = await this.prisma.tipoInstituicao.findFirst({
      where: { descricao },
    });

    return !!exists;
  }

  async getByDescricao(descricao: string): Promise<TipoInstituicao> {
    return await this.prisma.tipoInstituicao.findFirst({
      where: { descricao },
    });
  }

  async update(id: number, data: UpdateTipoInstituicaoDto): Promise<TipoInstituicao> {
    return await this.prisma.tipoInstituicao.update({
      where: { id },
      data,
    });
  }

  async remove(id: number): Promise<TipoInstituicao> {
    return await this.prisma.tipoInstituicao.delete({
      where: { id },
    });
  }
}
