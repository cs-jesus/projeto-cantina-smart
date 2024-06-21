import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BairroService } from './bairro.service';
import { CreateBairroDto } from './dto/create-bairro.dto';
import { UpdateBairroDto } from './dto/update-bairro.dto';

@Controller('bairro')
export class BairroController {
  constructor(private readonly bairroService: BairroService) {}

  @Post()
  create(@Body() createBairroDto: CreateBairroDto) {
    return this.bairroService.create(createBairroDto);
  }

  @Get()
  findAll() {
    return this.bairroService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bairroService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBairroDto: UpdateBairroDto) {
    return this.bairroService.update(+id, updateBairroDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bairroService.remove(+id);
  }
}
