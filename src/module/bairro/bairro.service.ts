import { Injectable } from '@nestjs/common';
import { CreateBairroDto } from './dto/create-bairro.dto';
import { UpdateBairroDto } from './dto/update-bairro.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Bairro } from './entities/bairro.entity';

@Injectable()
export class BairroService {

  constructor(private readonly prisma: PrismaService) { }

  async create(data: CreateBairroDto): Promise<Bairro> {
    return await this.prisma.bairro.create({ data });
  }

  async getAll(): Promise<Bairro[]> {
    return await this.prisma.bairro.findMany();
  }

  async getById(id: number): Promise<Bairro> {
    return await this.prisma.bairro.findUnique({
      where: { id },
    });
  }

  async update(id: number, data: UpdateBairroDto): Promise<Bairro> {
    return await this.prisma.bairro.update({
      where: { id },
      data,
    });
  }

  async remove(id: number): Promise<Bairro> {
    return await this.prisma.bairro.delete({
      where: { id },
    });
  }
}
