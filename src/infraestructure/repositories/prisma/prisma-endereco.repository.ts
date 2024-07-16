import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/infraestructure/prisma/prisma.service';


import { EnderecoRepository } from 'src/domain/repositories/endereco.repository';
import { Endereco } from 'src/domain/entities/endereco.entity';

@Injectable()
export class PrismaEnderecoRepository implements EnderecoRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(endereco: Endereco): Promise<Endereco> {
    const created = await this.prisma.endereco.create({ 
        data: {
            cep: endereco.cep,
            numero: endereco.numero,
            fk_logradouro: endereco.logradouro,
            fk_bairro: endereco.bairro,
            fk_cidade: endereco.cidade,
            fk_estado: endereco.estado,

        },
        include: {
            logradouro: true,
            bairro: true,
            cidade: true,
            estado: true,
        } 
    });
    return new Endereco(created.fk_logradouro, created.fk_bairro, created.fk_cidade, created.fk_estado, created.cep, created.numero);
  }

  async update(id: number, data: any): Promise<Endereco> {
    const updated = await this.prisma.endereco.update({
      where: { id },
      data,
    });
    return new Endereco(updated.fk_logradouro, updated.fk_bairro, updated.fk_cidade, updated.fk_estado, updated.cep, updated.numero);
  }

  async delete(id: number): Promise<void> {
    await this.prisma.endereco.delete({ where: { id } });
  }

  async findAll(): Promise<Endereco[]> {
    const enderecos = await this.prisma.endereco.findMany();
    return enderecos.map(endereco => new Endereco(endereco.id, endereco.cep, endereco.numero, endereco.logradouroId, endereco.cidadeId, endereco.bairroId, endereco.estadoId));
  }

  async findById(id: number): Promise<Endereco | null> {
    const endereco = await this.prisma.endereco.findUnique({ where: { id } });
    if (!endereco) return null;
    return new Endereco(endereco.id, endereco.cep, endereco.numero, endereco.logradouroId, endereco.cidadeId, endereco.bairroId, endereco.estadoId);
  }
}
