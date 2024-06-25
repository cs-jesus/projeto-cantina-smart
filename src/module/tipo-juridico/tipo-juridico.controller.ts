import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TipoJuridicoService } from './tipo-juridico.service';
import { CreateTipoJuridicoDto } from './dto/create-tipo-juridico.dto';
import { UpdateTipoJuridicoDto } from './dto/update-tipo-juridico.dto';
import { TipoJuridico } from './entities/tipo-juridico.entity';

@Controller('tipo-juridico')
export class TipoJuridicoController {
  constructor(private readonly tipoJuridicoService: TipoJuridicoService) { }

  @Post()
  async create(@Body() CreateTipoJuridicoDto: CreateTipoJuridicoDto): Promise<TipoJuridico> {
    return await this.tipoJuridicoService.create(CreateTipoJuridicoDto);
  }


  @Get()
  async getAll(): Promise<TipoJuridico[]> {
    return await this.tipoJuridicoService.getdAll();
  }

  @Get(':id')
  async getById(@Param('id') id: string): Promise<TipoJuridico> {
    return await this.tipoJuridicoService.findOne(+id);
  }


  @Patch(':id')
  async update(@Param('id') id: string, @Body() data: UpdateTipoJuridicoDto): Promise<TipoJuridico> {
    return await this.tipoJuridicoService.update(+id, data);
  }


  @Delete(':id')
  async remove(@Param('id') id: string): Promise<TipoJuridico> {
    return await this.tipoJuridicoService.remove(+id);
  }

}