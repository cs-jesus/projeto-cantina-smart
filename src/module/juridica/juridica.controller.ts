import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { JuridicaService } from './juridica.service';
import { CreateTipoJuridicoDto } from './dto/create-juridica.dto';
import { UpdateJuridicaDto } from './dto/update-juridica.dto';
import { Juridica } from '@prisma/client';
import { promises } from 'dns';

@Controller('juridica')
export class JuridicaController {
  constructor(private readonly juridicaService: JuridicaService) { }

 @Post()
 create(@Body() createFisicaDto: CreateTipoJuridicoDto) {
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