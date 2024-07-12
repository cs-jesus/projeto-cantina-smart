import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { JuridicaService } from './juridica.service';
import { UpdateJuridicaDto } from './dto/update-juridica.dto';
import { CreateJuridicaDto } from './dto/create-juridica.dto';

@Controller('juridica')
export class JuridicaController {
  constructor(private readonly juridicaService: JuridicaService) { }

  @Post()
  create(@Body() createFisicaDto: CreateJuridicaDto) {
    return this.juridicaService.create(createFisicaDto);
  }

  @Get()
  getAll() {
    return this.juridicaService.getAll();
  }

  @Get(':id')
  getById(@Param('id') id: string) {
    return this.juridicaService.getById(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFisicaDto: UpdateJuridicaDto) {
    return this.juridicaService.update(+id, updateFisicaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.juridicaService.remove(+id);
  }
}
