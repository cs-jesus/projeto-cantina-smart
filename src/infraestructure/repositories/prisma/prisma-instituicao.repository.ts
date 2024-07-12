import { Injectable } from "@nestjs/common";
import { Instituicao } from "src/domain/entities/instituicao.entity";
import { TipoInstituicao } from "src/domain/entities/tipo-instituicao.entity";
import { InstituicaoRepository } from "src/domain/repositories/instituicao.repository";
import { PrismaService } from "src/infraestructure/prisma/prisma.service";

@Injectable()
export class PrismaInstituicaoRepository implements InstituicaoRepository {
  constructor(private readonly prisma: PrismaService) {}

  async save(instituicao: Instituicao): Promise<Instituicao> {
    const criado = await this.prisma.instituicao.create({
      data: {
        nome: instituicao.nome,
        sigla: instituicao.sigla,
        fk_tipo: instituicao.fk_tipo,
      },
      include: { tipoInstituicao: true },
    });
    return new Instituicao(
      criado.id,
      criado.fk_tipo,
      criado.nome,
      criado.sigla,
      new TipoInstituicao(criado.tipoInstituicao.id, criado.tipoInstituicao.descricao)
    );
  }

  async update(id: number, instituicao: Instituicao): Promise<Instituicao> {
    const editado = await this.prisma.instituicao.update({
      where: { id },
      data: {
        nome: instituicao.nome,
        sigla: instituicao.sigla,
        fk_tipo: instituicao.fk_tipo,
      },
      include: { tipoInstituicao: true },
    });
    return new Instituicao(
      editado.id,
      editado.fk_tipo,
      editado.nome,
      editado.sigla,
      new TipoInstituicao(editado.tipoInstituicao.id, editado.tipoInstituicao.descricao)
    );
  }

  async delete(id: number): Promise<void> {
    await this.prisma.instituicao.delete({ where: { id } });
  }

  async findById(id: number): Promise<Instituicao | null> {
    const localizado = await this.prisma.instituicao.findUnique({
      where: { id },
      include: { tipoInstituicao: true },
    });
    if (!localizado) return null;
    return new Instituicao(
      localizado.id,
      localizado.fk_tipo,
      localizado.nome,
      localizado.sigla,
      new TipoInstituicao(localizado.tipoInstituicao.id, localizado.tipoInstituicao.descricao)
    );
  }

  async findAll(): Promise<Instituicao[]> {
    const instituicoes = await this.prisma.instituicao.findMany({
      include: { tipoInstituicao: true },
    });
    return instituicoes.map((inst) =>
      new Instituicao(
        inst.id,
        inst.fk_tipo,
        inst.nome,
        inst.sigla,
        new TipoInstituicao(inst.tipoInstituicao.id, inst.tipoInstituicao.descricao)
      )
    );
  }

  async findByNome(nome: string): Promise<Instituicao | null> {
    const instituicao = await this.prisma.instituicao.findUnique({
      where: { nome },
      include: { tipoInstituicao: true },
    });
    if (!instituicao) return null;
    return new Instituicao(
      instituicao.id,
      instituicao.fk_tipo,
      instituicao.nome,
      instituicao.sigla,
      new TipoInstituicao(instituicao.tipoInstituicao.id, instituicao.tipoInstituicao.descricao)
    );
  }
}