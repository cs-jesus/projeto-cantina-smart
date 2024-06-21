import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TipoEstabelecimentoService } from './tipo-estabelecimento.service';
import { CreateTipoEstabelecimentoDto } from './dto/create-tipo-estabelecimento.dto';
import { UpdateTipoEstabelecimentoDto } from './dto/update-tipo-estabelecimento.dto';
import { TipoEstabelecimento } from './entities/tipo-estabelecimento.entity';

@Controller('tipo-estabelecimento')
export class TipoEstabelecimentoController {
  constructor(private readonly tipoEstabelecimentoService: TipoEstabelecimentoService) {}

  @Post()
  async create(@Body() data: CreateTipoEstabelecimentoDto): Promise<TipoEstabelecimento> {
    return await this.tipoEstabelecimentoService.create(data);
  }

  @Get()
  async findAll(): Promise<TipoEstabelecimento[]> {
    return await this.tipoEstabelecimentoService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<TipoEstabelecimento> {
    return await this.tipoEstabelecimentoService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() data: UpdateTipoEstabelecimentoDto): Promise<TipoEstabelecimento> {
    return await this.tipoEstabelecimentoService.update(+id, data);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<TipoEstabelecimento> {
    return await this.tipoEstabelecimentoService.remove(+id);
  }
}
