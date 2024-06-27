import { Injectable } from '@nestjs/common';
import { CreateCategoriaProdutoDto } from "./dto/CreateCategoriaProdutoDto";
import { UpdateCategoriaProdutoDto } from './dto/update-categoria-produto.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { CategoriaProduto } from './entities/categoria-produto.entity';

@Injectable()

export class CategoriaProdutoService {
  constructor(private readonly prisma: PrismaService) { }
  async create(data: CreateCategoriaProdutoDto): Promise<CategoriaProduto> {
    return await this.prisma.categoriaProduto.create({ data });;
  }

  async getAll(): Promise<CategoriaProduto[]> {
    return await this.prisma.categoriaProduto.findMany();
  }

  async getById(id: number): Promise<CategoriaProduto> {
    return await this.prisma.categoriaProduto.findUnique({
      where: { id },
    });
  }

  async update(id: number, data: UpdateCategoriaProdutoDto): Promise<CategoriaProduto> {
    return await this.prisma.categoriaProduto.update({
      where: { id },
      data,
    });
  }

  async remove(id: number): Promise<CategoriaProduto> {
    return await this.prisma.categoriaProduto.delete(
      {
        where: { id },
      });
  }
}
