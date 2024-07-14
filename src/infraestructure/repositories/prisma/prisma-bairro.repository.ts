import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/infraestructure/prisma/prisma.service";

import { Bairro } from "src/domain/entities/bairro.entity";
import { BairroRepository } from "src/domain/repositories/bairro.repository";

@Injectable()
export class PrismaBairroRepository implements BairroRepository {
    constructor(private readonly prisma: PrismaService) { }

    async create(bairro: Bairro): Promise<Bairro> {
        const created = await this.prisma.bairro.create({
            data: {
                nome: bairro.nome,
            },
        });
        return new Bairro(created.nome, created.id);
    }

    async update(id: number, bairro: Bairro): Promise<Bairro> {
        const updated = await this.prisma.bairro.update({
            where: { id },
            data: {
                nome: bairro.nome,
            },
        });
        return new Bairro(updated.nome, updated.id);
    }

    async delete(id: number): Promise<void> {
        await this.prisma.bairro.delete({ where: { id } });
    }

    async findAll(): Promise<Bairro[]> {
        const bairros = await this.prisma.bairro.findMany();
        return bairros.map(bairro => new Bairro(bairro.nome, bairro.id));
    }

    async findById(id: number): Promise<Bairro | null> {
        const bairro = await this.prisma.bairro.findUnique({ where: { id } });
        if (!bairro) return null;
        return new Bairro(bairro.nome, bairro.id);
    }

    async findByName(name: string): Promise<Bairro | null> {
        const bairro = await this.prisma.bairro.findUnique({ where: { nome: name } });
        if (!bairro) return null;
        return new Bairro(bairro.nome, bairro.id);
    }
}
