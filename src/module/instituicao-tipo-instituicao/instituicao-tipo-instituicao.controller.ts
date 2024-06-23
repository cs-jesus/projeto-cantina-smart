import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { InstituicaoTipoInstituicaoService } from './instituicao-tipo-instituicao.service';
import { CreateInstituicaoTipoInstituicaoDto } from './dto/create-instituicao-tipo-instituicao.dto';
import { UpdateInstituicaoTipoInstituicaoDto } from './dto/update-instituicao-tipo-instituicao.dto';

@Controller('instituicao-tipo-instituicao')
export class InstituicaoTipoInstituicaoController {
  constructor(private readonly instituicaoTipoInstituicaoService: InstituicaoTipoInstituicaoService) {}

  @Post()
  create(@Body() createInstituicaoTipoInstituicaoDto: CreateInstituicaoTipoInstituicaoDto) {
    return this.instituicaoTipoInstituicaoService.create(createInstituicaoTipoInstituicaoDto);
  }

  @Get()
  findAll() {
    return this.instituicaoTipoInstituicaoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.instituicaoTipoInstituicaoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateInstituicaoTipoInstituicaoDto: UpdateInstituicaoTipoInstituicaoDto) {
    return this.instituicaoTipoInstituicaoService.update(+id, updateInstituicaoTipoInstituicaoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.instituicaoTipoInstituicaoService.remove(+id);
  }
}
