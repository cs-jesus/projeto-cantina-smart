import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UnidadeMedidaService } from './unidade-medida.service';
import { CreateUnidadeMedidaDto } from './dto/create-unidade-medida.dto';
import { UpdateUnidadeMedidaDto } from './dto/update-unidade-medida.dto';

@Controller('unidade-medida')
export class UnidadeMedidaController {
  constructor(private readonly unidadeMedidaService: UnidadeMedidaService) {}

  @Post()
  create(@Body() createUnidadeMedidaDto: CreateUnidadeMedidaDto) {
    return this.unidadeMedidaService.create(createUnidadeMedidaDto);
  }

  @Get()
  findAll() {
    return this.unidadeMedidaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.unidadeMedidaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUnidadeMedidaDto: UpdateUnidadeMedidaDto) {
    return this.unidadeMedidaService.update(+id, updateUnidadeMedidaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.unidadeMedidaService.remove(+id);
  }
}
