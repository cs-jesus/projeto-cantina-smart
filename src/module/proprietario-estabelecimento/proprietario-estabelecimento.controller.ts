import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProprietarioEstabelecimentoService } from './proprietario-estabelecimento.service';
import { CreateProprietarioEstabelecimentoDto } from './dto/create-proprietario-estabelecimento.dto';
import { UpdateProprietarioEstabelecimentoDto } from './dto/update-proprietario-estabelecimento.dto';

@Controller('proprietario-estabelecimento')
export class ProprietarioEstabelecimentoController {
  constructor(private readonly proprietarioEstabelecimentoService: ProprietarioEstabelecimentoService) {}

  @Post()
  create(@Body() createProprietarioEstabelecimentoDto: CreateProprietarioEstabelecimentoDto) {
    return this.proprietarioEstabelecimentoService.create(createProprietarioEstabelecimentoDto);
  }

  @Get()
  findAll() {
    return this.proprietarioEstabelecimentoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.proprietarioEstabelecimentoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProprietarioEstabelecimentoDto: UpdateProprietarioEstabelecimentoDto) {
    return this.proprietarioEstabelecimentoService.update(+id, updateProprietarioEstabelecimentoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.proprietarioEstabelecimentoService.remove(+id);
  }
}
