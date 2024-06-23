import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { InstituicaoService } from './instituicao.service';
import { CreateInstituicaoDto } from './dto/create-instituicao.dto';
import { UpdateInstituicaoDto } from './dto/update-instituicao.dto';
import { Instituicao } from './entities/instituicao.entity';

@Controller('instituicao')
export class InstituicaoController {
  constructor(private readonly instituicaoService: InstituicaoService) { }

  @Post()
  async create(@Body() data: CreateInstituicaoDto): Promise<Instituicao> {
    return await this.instituicaoService.create(data);
  }

  @Get()
  async getAll(): Promise<Instituicao[]> {
    return await this.instituicaoService.getAll();
  }

  @Get(':id')
  async getById(@Param('id') id: string): Promise<Instituicao> {
    return await this.instituicaoService.getById(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() data: UpdateInstituicaoDto): Promise<Instituicao> {
    return await this.instituicaoService.update(+id, data);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<Instituicao> {
    return await this.instituicaoService.remove(+id);
  }
}
