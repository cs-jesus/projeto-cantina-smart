import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CategoriaProdutoService } from './categoria-produto.service';
import { CreateCategoriaProdutoDto } from "./dto/CreateCategoriaProdutoDto";
import { UpdateCategoriaProdutoDto } from './dto/update-categoria-produto.dto';
import { CategoriaProduto } from './entities/categoria-produto.entity';

@Controller('categoria-produto')
export class CategoriaProdutoController {
  constructor(private readonly categoriaProdutoService: CategoriaProdutoService) { }

  @Post()
  async create(@Body() data: CreateCategoriaProdutoDto): Promise<CategoriaProduto> {
    return await this.categoriaProdutoService.create(data);
  }

  @Get()
  async getAll(): Promise<CategoriaProduto[]> {
    return await this.categoriaProdutoService.getAll();
  }

  @Get(':id')
  async getById(@Param('id') id: string): Promise<CategoriaProduto> {
    return this.categoriaProdutoService.getById(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() data: UpdateCategoriaProdutoDto): Promise<CategoriaProduto> {
    return await this.categoriaProdutoService.update(+id, data);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<CategoriaProduto> {
    return await this.categoriaProdutoService.remove(+id);
  }
}
