import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FuncaoService } from './funcao.service';
import { CreateFuncaoDto } from './dto/create-funcao.dto';
import { UpdateFuncaoDto } from './dto/update-funcao.dto';

@Controller('funcao')
export class FuncaoController {
  constructor(private readonly funcaoService: FuncaoService) {}

  @Post()
  create(@Body() createFuncaoDto: CreateFuncaoDto) {
    return this.funcaoService.create(createFuncaoDto);
  }

  @Get()
  findAll() {
    return this.funcaoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.funcaoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFuncaoDto: UpdateFuncaoDto) {
    return this.funcaoService.update(+id, updateFuncaoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.funcaoService.remove(+id);
  }
}
