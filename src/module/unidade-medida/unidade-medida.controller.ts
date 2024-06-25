import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UnidadeMedidaService } from './unidade-medida.service';
import { CreateUnidadeMedidaDto } from './dto/create-unidade-medida.dto';
import { UpdateUnidadeMedidaDto } from './dto/update-unidade-medida.dto';
import { UnidadeMedida } from './entities/unidade-medida.entity';

@Controller('unidade-medida')
export class UnidadeMedidaController {
  constructor(private readonly unidadeMedidaService: UnidadeMedidaService) { }

  @Post()
  async create(@Body() data: CreateUnidadeMedidaDto): Promise<UnidadeMedida> {
    return await this.unidadeMedidaService.create(data);  
  }

  @Get()
  async getAll():Promise<UnidadeMedida[]> {
    return await this.unidadeMedidaService.getAll();
  }

  @Get(':id')
  async getById(@Param('id') id: string): Promise<UnidadeMedida> {
    return this.unidadeMedidaService.getById(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() data: UpdateUnidadeMedidaDto):Promise<UnidadeMedida> {
    return await this.unidadeMedidaService.update(+id, data);
  }

  @Delete(':id')
  async remove(@Param('id') id: string):Promise<UnidadeMedida> {
    return await this.unidadeMedidaService.remove(+id);
  }
}
