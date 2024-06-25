import { Injectable } from '@nestjs/common';
import { CreateUnidadeMedidaDto } from './dto/create-unidade-medida.dto';
import { UpdateUnidadeMedidaDto } from './dto/update-unidade-medida.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { UnidadeMedida } from './entities/unidade-medida.entity';

@Injectable()
export class UnidadeMedidaService {
  constructor(private readonly prisma:PrismaService){}
  async create(data:CreateUnidadeMedidaDto): Promise <UnidadeMedida> {
    return await this.prisma.UnidadeMedida.create({data});;
  }

  async getAll(): Promise<UnidadeMedida[]> {
    return await this.prisma.UnidadeMedida.findmany();
  }

  async getById(id: number): Promise<UnidadeMedida> {
    return await this.prisma.UnidadeMedida.findUnique({
    where:{id},
  });
  }

  async update(id: number, data: UpdateUnidadeMedidaDto):Promise <UnidadeMedida> {
    return await this.prisma.UnidadeMedida.update({
      where: {id},
      data,
 });
  }

  async remove(id: number):Promise<UnidadeMedida> {
    return await this.prisma.UnidadeMedida.delete(
      {where: {id},
    } );
  }
}
