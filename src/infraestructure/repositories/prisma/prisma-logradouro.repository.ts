import { Injectable } from "@nestjs/common";
import { Logradouro } from "src/domain/entities/logradouro.entity";
import { LogradouroRepository } from "src/domain/repositories/logradouro.repository";
import { PrismaService } from "src/infraestructure/prisma/prisma.service";

@Injectable()
export class PrismaLogradouroRepository implements LogradouroRepository {
    constructor(private readonly prisma: PrismaService) { }
 
    async create(logradouro: Logradouro): Promise<Logradouro> {
        const created = await this.prisma.logradouro.create({
            data: { nome: logradouro.nome },
        });
        return new Logradouro(created.id, created.nome);
    }

    async update(id: number, logradouro: Logradouro): Promise<Logradouro> {
        const updated = await this.prisma.logradouro.update({
            where: { id },
            data: { nome: logradouro.nome },
        });
        return new Logradouro(updated.id, updated.nome);
    }

    async delete(id: number): Promise<void> {
        await this.prisma.logradouro.delete({ where: { id } });
    }

    async findAll(): Promise<Logradouro[]> {
        const logradouros = await this.prisma.logradouro.findMany();
        return logradouros.map(logradouro => new Logradouro(logradouro.id, logradouro.nome))
    }

    async findById(id: number): Promise<Logradouro | null> {
        const logradouro = await this.prisma.logradouro.findUnique({ where: { id } });
        if (!logradouro) return null;
        return new Logradouro(logradouro.id, logradouro.nome);
    }

    async findByName(name: string): Promise<Logradouro | null> {
        const logradouro = await this.prisma.logradouro.findUnique({ where: { nome: name } });
        if (!logradouro) return null;
        return new Logradouro(logradouro.id, logradouro.nome);
    }
}
