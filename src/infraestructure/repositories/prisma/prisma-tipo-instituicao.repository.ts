import { Injectable } from "@nestjs/common";
import { TipoInstituicao } from "src/domain/entities/tipo-instituicao.entity";
import { TipoInstituicaoRepository } from "src/domain/repositories/tipo-instituicao.repository";
import { PrismaService } from "src/infraestructure/prisma/prisma.service";

@Injectable()
export class PrismaTipoInstituicaoRepository implements TipoInstituicaoRepository {
  constructor(private readonly prisma: PrismaService) {}

  async save(tipoInstituicao: TipoInstituicao): Promise<TipoInstituicao> {
    const criado = await this.prisma.tipoInstituicao.create({
      data: {
        descricao: tipoInstituicao.descricao,
      },
    });
    return new TipoInstituicao(criado.id, criado.descricao);
  }

  async update(id: number, tipoInstituicao: TipoInstituicao): Promise<TipoInstituicao> {
    const editado = await this.prisma.tipoInstituicao.update({
      where: { id },
      data: {
        descricao: tipoInstituicao.descricao,
      },
    });
    return new TipoInstituicao(editado.id, editado.descricao);
  }

  async delete(id: number): Promise<void> {
    await this.prisma.tipoInstituicao.delete({ where: { id } });
  }

  async findById(id: number): Promise<TipoInstituicao | null> {
    const localizado = await this.prisma.tipoInstituicao.findUnique({
      where: { id },
    });
    if (!localizado) return null;
    return new TipoInstituicao(localizado.id, localizado.descricao);
  }

  async findAll(): Promise<TipoInstituicao[]> {
    const tipoInstituicoes = await this.prisma.tipoInstituicao.findMany();
    return tipoInstituicoes.map((tipo) => new TipoInstituicao(tipo.id, tipo.descricao));
  }

  async findByDescricao(descricao: string): Promise<TipoInstituicao | null> {
    const tipoInstituicao = await this.prisma.tipoInstituicao.findUnique({
      where: { descricao },
    });
    if (!tipoInstituicao) return null;
    return new TipoInstituicao(tipoInstituicao.id, tipoInstituicao.descricao);
  }
}