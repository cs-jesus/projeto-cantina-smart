import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProdutoFilialService } from './produto-filial.service';
import { CreateProdutoFilialDto } from './dto/create-produto-filial.dto';
import { UpdateProdutoFilialDto } from './dto/update-produto-filial.dto';

@Controller('produto-filial')
export class ProdutoFilialController {
  constructor(private readonly produtoFilialService: ProdutoFilialService) { }

  @Post()
  create(@Body() createProdutoFilialDto: CreateProdutoFilialDto) {
    return this.produtoFilialService.create(createProdutoFilialDto);
  }

  @Get()
  getAll() {
    return this.produtoFilialService.getAll();
  }

  @Get(':id')
  getById(@Param('id') id: string) {
    return this.produtoFilialService.getById(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProdutoFilialDto: UpdateProdutoFilialDto) {
    return this.produtoFilialService.update(+id, updateProdutoFilialDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.produtoFilialService.remove(+id);
  }
}
