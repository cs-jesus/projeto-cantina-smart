import { Injectable } from "@nestjs/common";
import { TipoInstituicao } from "src/domain/entities/tipo-instituicao.entity";
import { TipoInstituicaoRepository } from "src/domain/repositories/tipo-instituicao.repository";
import { PrismaService } from "src/infraestructure/prisma/prisma.service";

@Injectable()
export class PrismaTipoInstituicaoRepository implements TipoInstituicaoRepository {
    constructor(private readonly prisma: PrismaService) { }

    async create(tipoInstituicao: TipoInstituicao): Promise<TipoInstituicao> {
        const created = await this.prisma.tipoInstituicao.create({
            data: {
                descricao: tipoInstituicao.descricao,
            },
        });
        return new TipoInstituicao(created.descricao, created.id);
    }

    async update(id: number, tipoInstituicao: TipoInstituicao): Promise<TipoInstituicao> {
        const updated = await this.prisma.tipoInstituicao.update({
            where: { id },
            data: {
                descricao: tipoInstituicao.descricao,
            },
        });
        return new TipoInstituicao(updated.descricao, updated.id);
    }

    async delete(id: number): Promise<void> {
        await this.prisma.tipoInstituicao.delete({ where: { id } });
    }

    async findAll(): Promise<TipoInstituicao[]> {
        const tipoInstituicoes = await this.prisma.tipoInstituicao.findMany();
        return tipoInstituicoes.map(tipoInstituicoes => new TipoInstituicao(tipoInstituicoes.descricao, tipoInstituicoes.id))
    }

    async findById(id: number): Promise<TipoInstituicao | null> {
        const tipoInstituicoes = await this.prisma.tipoInstituicao.findUnique({ where: { id } });
        if (!tipoInstituicoes) return null;
        return new TipoInstituicao(tipoInstituicoes.descricao, tipoInstituicoes.id);
    }

    async findByDescricao(descricao: string): Promise<TipoInstituicao | null> {
        const tipoInstituicoes = await this.prisma.tipoInstituicao.findUnique({ where: { descricao: descricao } });
        if (!tipoInstituicoes) return null;
        return new TipoInstituicao(tipoInstituicoes.descricao, tipoInstituicoes.id);
    }
}
