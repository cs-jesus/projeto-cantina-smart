import { Injectable } from '@nestjs/common';
import { CreateEstadoDto } from './dto/create-estado.dto';
import { UpdateEstadoDto } from './dto/update-estado.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Estado } from './entities/estado.entity';

@Injectable()
export class EstadoService {

  constructor(private readonly prisma: PrismaService) { }

  async create(data: CreateEstadoDto): Promise<Estado> {
    return await this.prisma.estado.create({ data });
  }

  async getAll(): Promise<Estado[]> {
    return await this.prisma.estado.findMany();
  }

  async getById(id: number): Promise<Estado> {
    return await this.prisma.estado.findUnique({
      where: { id },
    });
  }

  async update(id: number, data: UpdateEstadoDto): Promise<Estado> {
    return await this.prisma.estado.update({
      where: { id },
      data,
    });
  }

  async remove(id: number): Promise<Estado> {
    return await this.prisma.estado.delete({
      where: { id },
    });
  }
}
