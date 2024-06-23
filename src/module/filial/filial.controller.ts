import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FilialService } from './filial.service';
import { CreateFilialDto } from './dto/create-filial.dto';
import { UpdateFilialDto } from './dto/update-filial.dto';

@Controller('filial')
export class FilialController {
  constructor(private readonly filialService: FilialService) {}

  @Post()
  create(@Body() createFilialDto: CreateFilialDto) {
    return this.filialService.create(createFilialDto);
  }

  @Get()
  findAll() {
    return this.filialService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.filialService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFilialDto: UpdateFilialDto) {
    return this.filialService.update(+id, updateFilialDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.filialService.remove(+id);
  }
}
