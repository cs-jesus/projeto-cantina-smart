import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CategoriaProdutoService } from './categoria-produto.service';
import { CreateCategoriaProdutoDto } from './dto/create-categoria-produto.dto';
import { UpdateCategoriaProdutoDto } from './dto/update-categoria-produto.dto';

@Controller('categoria-produto')
export class CategoriaProdutoController {
  constructor(private readonly categoriaProdutoService: CategoriaProdutoService) {}

  @Post()
  create(@Body() createCategoriaProdutoDto: CreateCategoriaProdutoDto) {
    return this.categoriaProdutoService.create(createCategoriaProdutoDto);
  }

  @Get()
  findAll() {
    return this.categoriaProdutoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.categoriaProdutoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCategoriaProdutoDto: UpdateCategoriaProdutoDto) {
    return this.categoriaProdutoService.update(+id, updateCategoriaProdutoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categoriaProdutoService.remove(+id);
  }
}
