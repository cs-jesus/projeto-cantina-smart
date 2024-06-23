import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TipoJuridicoService } from './tipo-juridico.service';
import { CreateTipoJuridicoDto } from './dto/create-tipo-juridico.dto';
import { UpdateTipoJuridicoDto } from './dto/update-tipo-juridico.dto';

@Controller('tipo-juridico')
export class TipoJuridicoController {
  constructor(private readonly tipoJuridicoService: TipoJuridicoService) { }

  @Post()
  create(@Body() createTipoJuridicoDto: CreateTipoJuridicoDto) {
    return this.tipoJuridicoService.create(createTipoJuridicoDto);
  }

  @Get()
  getAll() {
    return this.tipoJuridicoService.getAll();
  }

  @Get(':id')
  getById(@Param('id') id: string) {
    return this.tipoJuridicoService.getById(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTipoJuridicoDto: UpdateTipoJuridicoDto) {
    return this.tipoJuridicoService.update(+id, updateTipoJuridicoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tipoJuridicoService.remove(+id);
  }
}
