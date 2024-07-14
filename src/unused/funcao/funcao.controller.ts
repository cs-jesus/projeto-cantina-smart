import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FuncaoService } from './funcao.service';
import { CreateFuncaoDto } from './dto/create-funcao.dto';
import { UpdateFuncaoDto } from './dto/update-funcao.dto';
import { Funcao } from './entities/funcao.entity';

@Controller('funcao')
export class FuncaoController {
  constructor(private readonly funcaoService: FuncaoService) { }

  @Post()
  async create(@Body() createFuncaoDto: CreateFuncaoDto): Promise<Funcao> {
    return await this.funcaoService.create(createFuncaoDto);
  }

  @Get()
  async getAll(): Promise<Funcao[]> {
    return await this.funcaoService.getAll();
  }

  @Get(':id')
  async getById(@Param('id') id: string): Promise<Funcao> {
    return await this.funcaoService.getById(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() data: UpdateFuncaoDto): Promise<Funcao> {
    return await this.funcaoService.update(+id, data);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<Funcao> {
    return await this.funcaoService.remove(+id);
  }
}
