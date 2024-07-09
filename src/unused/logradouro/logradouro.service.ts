import { Injectable } from '@nestjs/common';
import { CreateLogradouroDto } from './dto/create-logradouro.dto';
import { UpdateLogradouroDto } from './dto/update-logradouro.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Logradouro } from './entities/logradouro.entity';

@Injectable()
export class LogradouroService {

  constructor(private readonly prisma: PrismaService) { }

  async create(data: CreateLogradouroDto): Promise<Logradouro> {
    return await this.prisma.logradouro.create({ data });
  }

  async getAll(): Promise<Logradouro[]> {
    return await this.prisma.logradouro.findMany();
  }

  async getById(id: number): Promise<Logradouro> {
    return await this.prisma.logradouro.findUnique({
      where: { id },
    });
  }

  async update(id: number, data: UpdateLogradouroDto): Promise<Logradouro> {
    return await this.prisma.logradouro.update({
      where: { id },
      data,
    });
  }

  async remove(id: number): Promise<Logradouro> {
    return await this.prisma.logradouro.delete({
      where: { id },
    });
  }
}
