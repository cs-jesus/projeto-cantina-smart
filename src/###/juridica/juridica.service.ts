import { Injectable } from '@nestjs/common';

import { UpdateJuridicaDto } from './dto/update-juridica.dto'
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateJuridicaDto } from './dto/create-juridica.dto';
import { Juridica } from './entities/juridica.entity';

@Injectable()
export class JuridicaService {
  constructor(private readonly prisma: PrismaService) { }

  async create(data: CreateJuridicaDto): Promise<Juridica> {
    return await this.prisma.juridica.create({ data });
  }

  async getAll(): Promise<Juridica[]> {
    return await this.prisma.juridica.findMany();
  }

  async getById(id: number): Promise<Juridica> {
    return await this.prisma.juridica.findUnique({
      where: { id },
    });
  }

  async update(id: number, data: UpdateJuridicaDto): Promise<Juridica> {
    return await this.prisma.juridica.update({
      where: { id },
      data,
    });
  }

  async remove(id: number): Promise<Juridica> {
    return await this.prisma.juridica.delete({
      where: { id }
    });
  }

}