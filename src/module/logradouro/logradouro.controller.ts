import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LogradouroService } from './logradouro.service';
import { CreateLogradouroDto } from './dto/create-logradouro.dto';
import { UpdateLogradouroDto } from './dto/update-logradouro.dto';

@Controller('logradouro')
export class LogradouroController {
  constructor(private readonly logradouroService: LogradouroService) {}

  @Post()
  create(@Body() createLogradouroDto: CreateLogradouroDto) {
    return this.logradouroService.create(createLogradouroDto);
  }

  @Get()
  findAll() {
    return this.logradouroService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.logradouroService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLogradouroDto: UpdateLogradouroDto) {
    return this.logradouroService.update(+id, updateLogradouroDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.logradouroService.remove(+id);
  }
}