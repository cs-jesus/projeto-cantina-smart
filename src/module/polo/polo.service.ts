import { Injectable } from '@nestjs/common';
import { CreatePoloDto } from './dto/create-polo.dto';
import { UpdatePoloDto } from './dto/update-polo.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Polo } from './entities/polo.entity';

@Injectable()
export class PoloService {

  constructor(private prisma: PrismaService) { }

  async create(data: CreatePoloDto): Promise<Polo> {
    return await this.prisma.polo.create({
      data: {
        complemento: data.complemento,
        nome: data.nome,
        instituicao: { connect: { id: data.instituicao.id } },
        endereco: { connect: { id: data.endereco.id } },
      },

      include: {
        instituicao: true,
        endereco: true,
      }
    }) as Polo;
  }

  update(id: number, updatePoloDto: UpdatePoloDto) {
    return `This action updates a #${id} polo`;
  }

  async remove(id: number): Promise<Polo> {
    return await this.prisma.polo.delete({
      where: { id },
      include: {
        instituicao: true,
        endereco: true,
      }
    }) as Polo;
  }

  async getAll(): Promise<Polo[]> {
    return await this.prisma.polo.findMany({
      include: {
        instituicao: true,
        endereco: true,
      }
    }) as Polo[];
  }

  async getById(id: number): Promise<Polo> {
    return await this.prisma.polo.findUnique({
      where: { id },
      include: {
        instituicao: true,
        endereco: true,
      }
    }) as Polo;
  }

  async getByName(name: string): Promise<Polo[]> {
    return await this.prisma.polo.findMany({
      include: {
        instituicao: true,
        endereco: true,
      }
    }) as Polo[];
  }

  async getByInstituicao(instituicaoId: number): Promise<Polo[]> {
    return await this.prisma.polo.findMany({
      where: { fk_instituicao: instituicaoId },
      include: {
        instituicao: true,
        endereco: true,
      },
    }) as Polo[];
  }
}
