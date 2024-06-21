import { Injectable } from '@nestjs/common';
import { CreateTipoEstabelecimentoDto } from './dto/create-tipo-estabelecimento.dto';
import { UpdateTipoEstabelecimentoDto } from './dto/update-tipo-estabelecimento.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { TipoEstabelecimento } from './entities/tipo-estabelecimento.entity';
import { promises } from 'dns';

@Injectable()
export class TipoEstabelecimentoService {

  constructor(private readonly prisma:PrismaService) {}

  async create(data: CreateTipoEstabelecimentoDto): Promise<TipoEstabelecimento> {
    return await this.prisma.tipoEstabelecimento.create({ data });
  }

  async findAll(): Promise<TipoEstabelecimento[]> {
    return await this.prisma.tipoEstabelecimento.findMany();
  }

  async findOne(id: number): Promise<TipoEstabelecimento> {
    return await this.prisma.tipoEstabelecimento.findUnique({
      where: { id },
    });
  }

  async update(id: number, data: UpdateTipoEstabelecimentoDto): Promise<TipoEstabelecimento> {
    return await this.prisma.tipoEstabelecimento.update({
      where: { id },
      data,
    });
  }

  async remove(id: number): Promise<TipoEstabelecimento> {
    return await this.prisma.tipoEstabelecimento.delete({
      where: { id }
    });
  }
}
