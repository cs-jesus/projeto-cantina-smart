import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/infraestructure/prisma/prisma.service";

import { Cidade } from "src/domain/entities/cidade.entity";
import { CidadeRepository } from "src/domain/repositories/cidade.repository";

@Injectable()
export class PrismaCidadeRepository implements CidadeRepository {
    constructor(private readonly prisma: PrismaService) { }

    async create(cidade: Cidade): Promise<Cidade> {
        const created = await this.prisma.cidade.create({
            data: { nome: cidade.nome, },
        });
        return new Cidade(created.id, created.nome);
    }

    async update(id: number, cidade: Cidade): Promise<Cidade> {
        const updated = await this.prisma.cidade.update({
            where: { id },
            data: { nome: cidade.nome },
        });
        return new Cidade(updated.id, updated.nome);
    }

    async delete(id: number): Promise<void> {
        await this.prisma.cidade.delete({ where: { id } });
    }

    async findAll(): Promise<Cidade[]> {
        const cidades = await this.prisma.cidade.findMany();
        return cidades.map(cidade => new Cidade(cidade.nome, cidade.id));
    }

    async findById(id: number): Promise<Cidade | null> {
        const cidade = await this.prisma.cidade.findUnique({ where: { id } });
        if (!cidade) return null;
        return new Cidade(cidade.id, cidade.nome);
    }

    async findByName(name: string): Promise<Cidade | null> {
        const cidade = await this.prisma.cidade.findUnique({ where: { nome: name } });
        if (!cidade) return null;
        return new Cidade(cidade.id, cidade.nome);
    }
}
