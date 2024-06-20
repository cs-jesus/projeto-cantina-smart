import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TipoInstituicaoService } from './tipo-instituicao.service';
import { CreateTipoInstituicaoDto } from './dto/create-tipo-instituicao.dto';
import { UpdateTipoInstituicaoDto } from './dto/update-tipo-instituicao.dto';

@Controller('tipo-instituicao')
export class TipoInstituicaoController {
  constructor(private readonly tipoInstituicaoService: TipoInstituicaoService) {}

  @Post()
  create(@Body() createTipoInstituicaoDto: CreateTipoInstituicaoDto) {
    return this.tipoInstituicaoService.create(createTipoInstituicaoDto);
  }

  @Get()
  findAll() {
    return this.tipoInstituicaoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tipoInstituicaoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTipoInstituicaoDto: UpdateTipoInstituicaoDto) {
    return this.tipoInstituicaoService.update(+id, updateTipoInstituicaoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tipoInstituicaoService.remove(+id);
  }
}
