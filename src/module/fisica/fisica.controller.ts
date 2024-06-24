import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TipoFisicaService } from './fisica.service';
import { CreateFisicaDto } from './dto/create-fisica.dto';
import { UpdateFisicaDto } from './dto/update-fisica.dto';

@Controller('fisica')
export class FisicaController {
  constructor(private readonly fisicaService: TipoFisicaService) { }

  @Post()
  create(@Body() createFisicaDto: CreateFisicaDto) {
    return this.fisicaService.create(createFisicaDto);
  }

  @Get()
  getAll() {
    return this.fisicaService.getAll();
  }

  @Get(':id')
  getById(@Param('id') id: string) {
    return this.fisicaService.findUnique(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFisicaDto: UpdateFisicaDto) {
    return this.fisicaService.update(+id, updateFisicaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fisicaService.remove(+id);
  }
}
