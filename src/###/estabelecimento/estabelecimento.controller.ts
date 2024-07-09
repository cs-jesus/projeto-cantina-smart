import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EstabelecimentoService } from './estabelecimento.service';
import { CreateEstabelecimentoDto } from './dto/create-estabelecimento.dto';
import { UpdateEstabelecimentoDto } from './dto/update-estabelecimento.dto';

@Controller('estabelecimento')
export class EstabelecimentoController {
  constructor(private readonly estabelecimentoService: EstabelecimentoService) { }

  @Post()
  create(@Body() createEstabelecimentoDto: CreateEstabelecimentoDto) {
    return this.estabelecimentoService.create(createEstabelecimentoDto);
  }

  @Get()
  getAll() {
    return this.estabelecimentoService.getAll();
  }

  @Get(':id')
  getById(@Param('id') id: string) {
    return this.estabelecimentoService.getById(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEstabelecimentoDto: UpdateEstabelecimentoDto) {
    return this.estabelecimentoService.update(+id, updateEstabelecimentoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.estabelecimentoService.remove(+id);
  }
}
