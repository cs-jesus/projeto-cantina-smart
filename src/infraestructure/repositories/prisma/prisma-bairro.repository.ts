import { Injectable } from '@nestjs/common';
import { Estado } from 'src/domain/entities/estado.entity';
import { EstadoRepository } from 'src/domain/repositories/estado.repository';
import { PrismaService } from 'src/infraestructure/prisma/prisma.service';

@Injectable()
export class PrismaEstadoRepository implements EstadoRepository {
    constructor(private readonly prisma: PrismaService) { }

    async create(estado: Estado): Promise<Estado> {
        const created = await this.prisma.estado.create({
            data: {
                uf: estado.uf,
            },
        });
        return new Estado(created.uf, created.id);
    }

    async update(id: number, estado: Estado): Promise<Estado> {
        const updated = await this.prisma.estado.update({
            where: { id },
            data: {
                uf: estado.uf
            },
        });
        return new Estado(updated.uf, updated.id);
    }

    async delete(id: number): Promise<void> {
        await this.prisma.estado.delete({ where: { id } });
    }

    async findAll(): Promise<Estado[]> {
        const estados = await this.prisma.estado.findMany();
        return estados.map(estado => new Estado(estado.uf, estado.id));
    }

    async findById(id: number): Promise<Estado | null> {
        const estado = await this.prisma.estado.findUnique({ where: { id } });
        if (!estado) return null;
        return new Estado(estado.uf, estado.id);
    }

    async findByUf(name: string): Promise<Estado | null> {
        const estado = await this.prisma.estado.findUnique({ where: { uf: name } });
        if (!estado) return null;
        return new Estado(estado.uf, estado.id);
    }
}
