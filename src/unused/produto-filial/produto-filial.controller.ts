import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProdutoFilialService } from './produto-filial.service';
import { CreateProdutoFilialDto } from './dto/create-produto-filial.dto';
import { UpdateProdutoFilialDto } from './dto/update-produto-filial.dto';
import { ProdutoFilial } from './entities/produto-filial.entity';


@Controller('produto-filial')
export class ProdutoFilialController {
  constructor(private readonly produtoFilialService: ProdutoFilialService) { }

  @Post()
  async create(@Body() data: CreateProdutoFilialDto): Promise<ProdutoFilial> {
    return await this.produtoFilialService.create(data);
  }

  @Get()
  async getAll(): Promise<ProdutoFilial[]> {
    return await this.produtoFilialService.getAll();
  }

  @Get(':id')
  async getById(@Param('id') id: string): Promise<ProdutoFilial> {
    return await this.produtoFilialService.getById(+id);
  }
  //UPDATE Pendente pois necessita de implementação diferente 
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProdutoFilialDto: UpdateProdutoFilialDto) {
    return this.produtoFilialService.update(+id, updateProdutoFilialDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<ProdutoFilial> {
    return await this.produtoFilialService.remove(+id);
  }
}