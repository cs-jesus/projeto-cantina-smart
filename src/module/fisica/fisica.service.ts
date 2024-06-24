import { Injectable } from '@nestjs/common';
import { CreateFisicaDto } from './dto/create-fisica.dto';
import { UpdateFisicaDto } from './dto/update-fisica.dto'
import { PrismaService } from 'src/prisma/prisma.service';
import { Fisica } from './entities/fisica.entity'

@Injectable()
export class TipoFisicaService {
  findUnique: any;
  constructor(private readonly prisma:PrismaService){}

async create (data: CreateFisicaDto): Promise<Fisica>{
  return await this.prisma.fisica.create({data});
}

async getAll(): Promise<Fisica[]> {
  return await this.prisma.fisica.findMany();
}

async findOne (id: number): Promise<Fisica> {
 return await this.prisma.fisica.findUnique({
  where: { id },
 });
  }

async update(id: number, data: UpdateFisicaDto): Promise<Fisica>{
  return await this.prisma.fisica.update({
    where:{ id },
    data,
  });
}

async remove(id: number): Promise<Fisica> {
  return await this.prisma.fisica.delete({
    where: { id }
  });
}

}