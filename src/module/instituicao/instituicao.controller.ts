import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { InstituicaoService } from './instituicao.service';
import { CreateInstituicaoDto } from './dto/create-instituicao.dto';
import { UpdateInstituicaoDto } from './dto/update-instituicao.dto';

@Controller('instituicao')
export class InstituicaoController {
  constructor(private readonly instituicaoService: InstituicaoService) {}

  @Post()
  async create(@Body() createInstituicaoDto: CreateInstituicaoDto) {
    return await this.instituicaoService.create(createInstituicaoDto);
  }

  @Get()
  async findAll() {
    return await this.instituicaoService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.instituicaoService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateInstituicaoDto: UpdateInstituicaoDto) {
    return await this.instituicaoService.update(+id, updateInstituicaoDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.instituicaoService.remove(+id);
  }
}
