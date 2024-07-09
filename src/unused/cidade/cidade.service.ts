import { Injectable } from '@nestjs/common';
import { CreateCidadeDto } from './dto/create-cidade.dto';
import { UpdateCidadeDto } from './dto/update-cidade.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Cidade } from './entities/cidade.entity';

@Injectable()
export class CidadeService {

  constructor(private readonly prisma: PrismaService) { }

  async create(data: CreateCidadeDto): Promise<Cidade> {
    return await this.prisma.cidade.create({ data });
  }

  async getAll(): Promise<Cidade[]> {
    return await this.prisma.cidade.findMany();
  }

  async getById(id: number): Promise<Cidade> {
    return await this.prisma.cidade.findUnique({
      where: { id },
    });
  }

  async update(id: number, data: UpdateCidadeDto): Promise<Cidade> {
    return await this.prisma.cidade.update({
      where: { id },
      data,
    });
  }

  async remove(id: number): Promise<Cidade> {
    return await this.prisma.cidade.delete({
      where: { id },
    });
  }
}
