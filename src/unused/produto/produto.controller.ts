import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProdutoService } from './produto.service';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';
import { Produto } from './entities/produto.entity';

@Controller('produto')
export class ProdutoController {
  constructor(private readonly produtoService: ProdutoService) { }

  @Post()
  async create(@Body() data: CreateProdutoDto): Promise<Produto> {
    return await this.produtoService.create(data);  
  }

  @Get()
  async getAll():Promise<Produto[]> {
    return await this.produtoService.getAll();
  }

  @Get(':id')
  async getById(@Param('id') id: string): Promise<Produto> {
    return this.produtoService.getById(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() data: UpdateProdutoDto):Promise<Produto> {
    return await this.produtoService.update(+id, data);
  }

  @Delete(':id')
  async remove(@Param('id') id: string):Promise<Produto> {
    return await this.produtoService.remove(+id);
  }
}
