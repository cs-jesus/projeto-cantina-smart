import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FisicaService } from './fisica.service';
import { CreateFisicaDto } from './dto/create-fisica.dto';
import { UpdateFisicaDto } from './dto/update-fisica.dto';

@Controller('fisica')
export class FisicaController {
  constructor(private readonly fisicaService: FisicaService) {}

  @Post()
  create(@Body() createFisicaDto: CreateFisicaDto) {
    return this.fisicaService.create(createFisicaDto);
  }

  @Get()
  findAll() {
    return this.fisicaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.fisicaService.findOne(+id);
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
