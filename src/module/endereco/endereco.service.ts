import { Injectable } from '@nestjs/common';
import { CreateEnderecoDto } from './dto/create-endereco.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Endereco } from './entities/endereco.entity';

@Injectable()
export class EnderecoService {

  constructor(private prisma: PrismaService) { }

  async create(data: CreateEnderecoDto): Promise<Endereco> {
    return await this.prisma.endereco.create({
      data: {
        cep: data.cep,
        numero: data.numero,
        logradouro: { connect: { id: data.logradouro.id } },
        bairro: { connect: { id: data.bairro.id } },
        cidade: { connect: { id: data.cidade.id } },
        estado: { connect: { id: data.estado.id } },
      },

      include: {
        logradouro: true,
        bairro: true,
        cidade: true,
        estado: true,
      }
    }) as Endereco;
  }

  async getAll(): Promise<Endereco[]> {
    return await this.prisma.endereco.findMany({
      include: {
        logradouro: true,
        bairro: true,
        cidade: true,
        estado: true,
      },
    }) as Endereco[];
  }

  async getById(id: number): Promise<Endereco | null> {
    return await this.prisma.endereco.findUnique({
      where: { id },
      include: {
        logradouro: true,
        bairro: true,
        cidade: true,
        estado: true,
      }
    }) as Endereco;
  }

  async remove(id: number): Promise<Endereco> {
    return await this.prisma.endereco.delete({
      where: { id },
      include: {
        logradouro: true,
        bairro: true,
        cidade: true,
        estado: true,
      }
    }) as Endereco;
  }
}
