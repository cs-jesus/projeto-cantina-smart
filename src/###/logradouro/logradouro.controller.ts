import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LogradouroService } from './logradouro.service';
import { CreateLogradouroDto } from './dto/create-logradouro.dto';
import { UpdateLogradouroDto } from './dto/update-logradouro.dto';
import { Logradouro } from './entities/logradouro.entity';

@Controller('logradouro')
export class LogradouroController {
  constructor(private readonly logradouroService: LogradouroService) { }

  @Post()
  async create(@Body() createLogradouroDto: CreateLogradouroDto): Promise<Logradouro> {
    return await this.logradouroService.create(createLogradouroDto);
  }

  @Get()
  async getAll(): Promise<Logradouro[]> {
    return await this.logradouroService.getAll();
  }

  @Get(':id')
  async getById(@Param('id') id: string): Promise<Logradouro> {
    return await this.logradouroService.getById(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateLogradouroDto: UpdateLogradouroDto): Promise<Logradouro> {
    return await this.logradouroService.update(+id, updateLogradouroDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<Logradouro> {
    return await this.logradouroService.remove(+id);
  }
}
