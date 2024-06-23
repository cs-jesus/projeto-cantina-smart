import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { JuridicaService } from './juridica.service';
import { CreateJuridicaDto } from './dto/create-juridica.dto';
import { UpdateJuridicaDto } from './dto/update-juridica.dto';

@Controller('juridica')
export class JuridicaController {
  constructor(private readonly juridicaService: JuridicaService) { }

  @Post()
  create(@Body() createJuridicaDto: CreateJuridicaDto) {
    return this.juridicaService.create(createJuridicaDto);
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
  update(@Param('id') id: string, @Body() updateJuridicaDto: UpdateJuridicaDto) {
    return this.juridicaService.update(+id, updateJuridicaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.juridicaService.remove(+id);
  }
}
