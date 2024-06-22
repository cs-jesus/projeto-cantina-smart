import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TipoInstituicaoService } from './tipo-instituicao.service';
import { CreateTipoInstituicaoDto } from './dto/create-tipo-instituicao.dto';
import { UpdateTipoInstituicaoDto } from './dto/update-tipo-instituicao.dto';
import { TipoInstituicao } from './entities/tipo-instituicao.entity';

@Controller('tipo-instituicao')
export class TipoInstituicaoController {
  constructor(private readonly tipoInstituicaoService: TipoInstituicaoService) {}

  @Post()
  async create(@Body() createTipoInstituicaoDto: CreateTipoInstituicaoDto): Promise<TipoInstituicao> {
    return await this.tipoInstituicaoService.create(createTipoInstituicaoDto);
  }

  @Get()
  async findAll(): Promise<TipoInstituicao[]> {
    return await this.tipoInstituicaoService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<TipoInstituicao> {
    return await this.tipoInstituicaoService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateTipoInstituicaoDto: UpdateTipoInstituicaoDto): Promise<TipoInstituicao> {
    return await this.tipoInstituicaoService.update(+id, updateTipoInstituicaoDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<TipoInstituicao> {
    return await this.tipoInstituicaoService.remove(+id);
  }
}
