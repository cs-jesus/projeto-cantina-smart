import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { InstituicaoService } from './instituicao.service';
import { CreateInstituicaoDto } from './dto/create-instituicao.dto';
import { UpdateInstituicaoDto } from './dto/update-instituicao.dto';
import { Instituicao } from './entities/instituicao.entity';

@Controller('instituicao')
export class InstituicaoController {
  constructor(private readonly instituicaoService: InstituicaoService) {}

  @Post()
  async create(@Body() data: CreateInstituicaoDto): Promise<Instituicao> {
    return await this.instituicaoService.create(data);
  }

  @Get()
  async findAll(): Promise<Instituicao[]> {
    return await this.instituicaoService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Instituicao> {
    return await this.instituicaoService.findOne(+id);
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
