import { Injectable } from '@nestjs/common';
import { CreateFuncaoDto } from './dto/create-funcao.dto';
import { UpdateFuncaoDto } from './dto/update-funcao.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Funcao } from './entities/funcao.entity';

@Injectable()
export class FuncaoService {

  constructor(private readonly prisma: PrismaService) { }

  async create(data: CreateFuncaoDto): Promise<Funcao> {
    return await this.prisma.funcao.create({ data });
  }

  async getAll(): Promise<Funcao[]> {
    return await this.prisma.funcao.findMany();
  }

  async getById(id: number): Promise<Funcao> {
    return await this.prisma.funcao.findUnique({
      where: { id },
    });
  }

  async update(id: number, data: UpdateFuncaoDto): Promise<Funcao> {
    return await this.prisma.funcao.update({
      where: { id },
      data,
    });
  }

  async remove(id: number): Promise<Funcao> {
    return await this.prisma.funcao.delete({
      where: { id }
    });
  }
}
