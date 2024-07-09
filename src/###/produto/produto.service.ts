import { Injectable } from '@nestjs/common';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Produto } from './entities/produto.entity';

@Injectable()
export class ProdutoService {
  constructor(private readonly prisma:PrismaService){}
  async create(data:CreateProdutoDto): Promise <Produto> {
    return await this.prisma.produto.create({data});
  }

  async getAll(): Promise<Produto[]> {
    return await this.prisma.produto.findMany();
  }

  async getById(id: number): Promise<Produto> {
    return await this.prisma.produto.findUnique({
    where:{id},
  });
  }

  async update(id: number, data: UpdateProdutoDto):Promise <Produto> {
    return await this.prisma.produto.update({
      where: {id},
      data,
 });
  }

  async remove(id: number):Promise<Produto> {
    return await this.prisma.produto.delete(
      {where: {id},
    } );
  }
}
