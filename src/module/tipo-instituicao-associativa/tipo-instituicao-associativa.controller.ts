import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TipoInstituicaoAssociativaService } from './tipo-instituicao-associativa.service';
import { CreateTipoInstituicaoAssociativaDto } from './dto/create-tipo-instituicao-associativa.dto';
import { UpdateTipoInstituicaoAssociativaDto } from './dto/update-tipo-instituicao-associativa.dto';

@Controller('tipo-instituicao-associativa')
export class TipoInstituicaoAssociativaController {
  constructor(private readonly tipoInstituicaoAssociativaService: TipoInstituicaoAssociativaService) {}

  @Post()
  create(@Body() createTipoInstituicaoAssociativaDto: CreateTipoInstituicaoAssociativaDto) {
    return this.tipoInstituicaoAssociativaService.create(createTipoInstituicaoAssociativaDto);
  }

  @Get()
  findAll() {
    return this.tipoInstituicaoAssociativaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tipoInstituicaoAssociativaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTipoInstituicaoAssociativaDto: UpdateTipoInstituicaoAssociativaDto) {
    return this.tipoInstituicaoAssociativaService.update(+id, updateTipoInstituicaoAssociativaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tipoInstituicaoAssociativaService.remove(+id);
  }
}
