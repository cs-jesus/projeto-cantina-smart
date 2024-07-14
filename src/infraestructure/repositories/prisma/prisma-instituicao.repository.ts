import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/infraestructure/prisma/prisma.service";

import { Instituicao } from "src/domain/entities/instituicao.entity";
import { InstituicaoRepository } from "src/domain/repositories/instituicao.repository";

@Injectable()
export class PrismaInstituicaoRepository implements InstituicaoRepository {
    constructor(private readonly prisma: PrismaService) { }

    async create(instituicao: Instituicao): Promise<Instituicao> {
        const created = await this.prisma.instituicao.create({
            data: {
                nome: instituicao.nome,
                sigla: instituicao.sigla,
                fk_tipo: instituicao.fk_tipo,

            },
            include: { tipoInstituicao: true },
        });
        return new Instituicao(
            created.fk_tipo,
            created.nome,
            created.sigla,
            created.id,
            created.tipoInstituicao,
        );
    }

    async update(id: number, instituicao: Instituicao): Promise<Instituicao> {
        const updated = await this.prisma.instituicao.update({
            where: { id },
            data: {
                nome: instituicao.nome,
                sigla: instituicao.sigla,
                fk_tipo: instituicao.fk_tipo,
            },
            include: { tipoInstituicao: true },
        });
        return new Instituicao(
            updated.fk_tipo,
            updated.nome,
            updated.sigla,
            updated.id,
            updated.tipoInstituicao,
        );
    }

    async delete(id: number): Promise<void> {
        await this.prisma.instituicao.delete({ where: { id } });
    }

    async findAll(): Promise<Instituicao[]> {
        const instituicoes = await this.prisma.instituicao.findMany({
            include: { tipoInstituicao: true },
        });
        return instituicoes.map((inst) =>
            new Instituicao(
                inst.fk_tipo,
                inst.nome,
                inst.sigla,
                inst.id,
                inst.tipoInstituicao)
        );
    }

    async findById(id: number): Promise<Instituicao | null> {
        const instituicao = await this.prisma.instituicao.findUnique({
            where: { id },
            include: { tipoInstituicao: true },
        });
        if (!instituicao) return null;
        return new Instituicao(

            instituicao.fk_tipo,
            instituicao.nome,
            instituicao.sigla,
            instituicao.id,
            instituicao.tipoInstituicao,
        );
    }

    async findByName(nome: string): Promise<Instituicao | null> {
        const instituicao = await this.prisma.instituicao.findUnique({
            where: { nome },
            include: { tipoInstituicao: true },
        });
        if (!instituicao) return null;
        return new Instituicao(
            instituicao.fk_tipo,
            instituicao.nome,
            instituicao.sigla,
            instituicao.id,
            instituicao.tipoInstituicao,
        );
    }

    async isNomeUnique(nome: string): Promise<boolean> {
        const instituicao = await this.findByName(nome);
        return !instituicao;
    }
}
