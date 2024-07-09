import { Injectable } from '@nestjs/common';
import { CreateProdutoFilialDto } from './dto/create-produto-filial.dto';
import { UpdateProdutoFilialDto } from './dto/update-produto-filial.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { ProdutoFilial } from './entities/produto-filial.entity';

@Injectable()
export class ProdutoFilialService {
  constructor(private prisma: PrismaService) { }

  async create(data: CreateProdutoFilialDto): Promise<ProdutoFilial> {
    return await this.prisma.produtoFilial.create({
      data: {
        descricao: data.descricao,
        perecivel: data.perecivel,
        preco: data.preco,
        quantidade_atual: data.quantidade_atual,
        quantidade_minima: data.quantidade_minima,
        quantidade_seguranca: data.quantidade_seguranca,
        data_vencimento: data.data_vencimento,
        filial: { connect: { id: data.filial.id } },
        produto: { connect: { id: data.produto.id } },
        categoriaProduto: { connect: { id: data.categoriaProduto.id } },
        unidadeMedida: {
          connect: {
            id: data.unidadeMedida.id

          }
        },
      },
      include: {
        filial: true,
        produto: true,
        categoriaProduto: true,
        unidadeMedida: true,
      }
    }) as ProdutoFilial;
  }

  async getAll(): Promise<ProdutoFilial[]> {
    return await this.prisma.produtoFilial.findMany({
      include: {
        filial: true,
        produto: true,
        categoriaProduto: true,
        unidadeMedida: true,
      },
    }) as ProdutoFilial[];
  }

  async getById(id: number): Promise<ProdutoFilial> {
    return await this.prisma.produtoFilial.findUnique({
      where: { id },
      include: {
        filial: true,
        produto: true,
        categoriaProduto: true,
        unidadeMedida: true,
      }
    }) as ProdutoFilial;
  }
  //UPDATE Pendente pois necessita de implementação diferente 
  update(id: number, updateProdutoFilialDto: UpdateProdutoFilialDto) {
    return `This action updates a #${id} produtoFilial`;
  }

  async remove(id: number): Promise<ProdutoFilial> {
    return await this.prisma.produtoFilial.delete({
      where: { id },
      include: {
        filial: true,
        produto: true,
        categoriaProduto: true,
        unidadeMedida: true,
      }
    }) as ProdutoFilial;
  }
}