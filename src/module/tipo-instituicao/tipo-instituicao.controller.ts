import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TipoInstituicaoService } from './tipo-instituicao.service';
import { CreateTipoInstituicaoDto } from './dto/create-tipo-instituicao.dto';
import { UpdateTipoInstituicaoDto } from './dto/update-tipo-instituicao.dto';
import { TipoInstituicao } from './entities/tipo-instituicao.entity';

@Controller('tipo-instituicao')
export class TipoInstituicaoController {
  constructor(private readonly tipoInstituicaoService: TipoInstituicaoService) { }

  @Post()
  async create(@Body() data: CreateTipoInstituicaoDto): Promise<TipoInstituicao> {
    return await this.tipoInstituicaoService.create(data);
  }

  @Get()
  async getAll(): Promise<TipoInstituicao[]> {
    return await this.tipoInstituicaoService.getAll();
  }

  @Get(':id')
  async getById(@Param('id') id: string): Promise<TipoInstituicao> {
    return await this.tipoInstituicaoService.getById(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() data: UpdateTipoInstituicaoDto): Promise<TipoInstituicao> {
    return await this.tipoInstituicaoService.update(+id, data);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<TipoInstituicao> {
    return await this.tipoInstituicaoService.remove(+id);
  }
}
