import { Injectable } from '@nestjs/common';
import { CreateTipoJuridicoDto } from './dto/create-tipo-juridico.dto';
import { UpdateTipoJuridicoDto } from './dto/update-tipo-juridico.dto'
import { PrismaService } from 'src/prisma/prisma.service';
import { TipoJuridico } from './entities/tipo-juridico.entity'

@Injectable()
export class TipoJuridicoService {
  constructor(private readonly prisma:PrismaService){}

  async create (data: CreateTipoJuridicoDto): Promise<TipoJuridico> {
    return await this.prisma.tipoJuridico.create({ data });
  }

  async getdAll(): Promise<TipoJuridico[]> {
    return await this.prisma.tipoJuridico.findMany() ;
  }

  async findOne (id: number): Promise<TipoJuridico> {
    return await this.prisma.tipoJuridico.findUnique ({
      where: { id },
    });
  }

  async update(id: number, data: UpdateTipoJuridicoDto): Promise<TipoJuridico>{
    return await this.prisma.tipoJuridico.update({
      where: { id },
      data,
    });
  }

  async remove (id: number): Promise<TipoJuridico>{
    return await this.prisma.tipoJuridico.delete({
      where: { id }
    });
  }

}