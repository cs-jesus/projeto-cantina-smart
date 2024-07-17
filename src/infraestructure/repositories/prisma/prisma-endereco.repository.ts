import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/infraestructure/prisma/prisma.service';

import { Endereco } from 'src/domain/entities/endereco.entity';
import { EnderecoRepository } from 'src/domain/repositories/endereco.repository';

@Injectable()
export class PrismaEnderecoRepository implements EnderecoRepository {
    constructor(private readonly prisma: PrismaService) { }

    async create(endereco: Endereco): Promise<Endereco> {
        const created = await this.prisma.endereco.create({
            data: {
                fk_logradouro: endereco.fk_logradouro,
                fk_bairro: endereco.fk_bairro,
                fk_cidade: endereco.fk_cidade,
                fk_estado: endereco.fk_estado,
                cep: endereco.cep,
                numero: endereco.numero,
            },
            include: {
                logradouro: true,
                bairro: true,
                cidade: true,
                estado: true,
            },
        });
        return new Endereco(
            created.fk_logradouro, created.fk_bairro, created.fk_cidade, created.fk_estado,
            created.cep, created.numero, created.id,
            created.logradouro, created.bairro, created.cidade, created.estado,
        );
    }

    async update(id: number, endereco: Endereco): Promise<Endereco> {
        const updated = await this.prisma.endereco.update({
            where: { id },
            data: {
                fk_logradouro: endereco.fk_logradouro,
                fk_bairro: endereco.fk_bairro,
                fk_cidade: endereco.fk_cidade,
                fk_estado: endereco.fk_estado,
                cep: endereco.cep,
                numero: endereco.numero,
            },
            include: {
                logradouro: true,
                bairro: true,
                cidade: true,
                estado: true,
            },
        });
        return new Endereco(
            updated.fk_logradouro, updated.fk_bairro, updated.fk_cidade, updated.fk_estado,
            updated.cep, updated.numero, updated.id,
            updated.logradouro, updated.bairro, updated.cidade, updated.estado,
        );
    }

    async delete(id: number): Promise<void> {
        await this.prisma.endereco.delete({ where: { id } });

    }

    async findAll(): Promise<Endereco[]> {
        const enderecos = await this.prisma.endereco.findMany({
            include: {
                logradouro: true,
                bairro: true,
                cidade: true,
                estado: true,
            },
        });
        return enderecos.map(endereco => new Endereco(
            endereco.fk_logradouro, endereco.fk_bairro, endereco.fk_cidade, endereco.fk_estado,
            endereco.cep, endereco.numero, endereco.id,
            endereco.logradouro, endereco.cidade, endereco.bairro, endereco.estado
        ));
    }

    async findById(id: number): Promise<Endereco | null> {
        const endereco = await this.prisma.endereco.findUnique({
            where: { id },
            include: {
                logradouro: true,
                bairro: true,
                cidade: true,
                estado: true,
            },
        });
        if (!endereco) return null;
        return new Endereco(
            endereco.fk_logradouro, endereco.fk_bairro, endereco.fk_cidade, endereco.fk_estado,
            endereco.cep, endereco.numero, endereco.id,
            endereco.logradouro, endereco.cidade, endereco.bairro, endereco.estado
        );
    }

    async findByCepAndNumero(cep: string, numero: string): Promise<Endereco | null> {
        const endereco = await this.prisma.endereco.findUnique({
            where: { cep_numero: { cep, numero } },
            include: {
                logradouro: true,
                bairro: true,
                cidade: true,
                estado: true,
            },
        });
        if (!endereco) return null;
        return new Endereco(
            endereco.fk_logradouro, endereco.fk_bairro, endereco.fk_cidade, endereco.fk_estado,
            endereco.cep, endereco.numero, endereco.id,
            endereco.logradouro, endereco.bairro, endereco.cidade, endereco.estado,
        );
    }
}
