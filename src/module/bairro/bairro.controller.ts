import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BairroService } from './bairro.service';
import { CreateBairroDto } from './dto/create-bairro.dto';
import { UpdateBairroDto } from './dto/update-bairro.dto';
import { Bairro } from './entities/bairro.entity';

@Controller('bairro')
export class BairroController {
  constructor(private readonly bairroService: BairroService) { }

  @Post()
  async create(@Body() createBairroDto: CreateBairroDto): Promise<Bairro> {
    return await this.bairroService.create(createBairroDto);
  }

  @Get()
  async getAll(): Promise<Bairro[]> {
    return await this.bairroService.getAll();
  }

  @Get(':id')
  async getById(@Param('id') id: string): Promise<Bairro> {
    return await this.bairroService.getById(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateBairroDto: UpdateBairroDto): Promise<Bairro> {
    return await this.bairroService.update(+id, updateBairroDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<Bairro> {
    return await this.bairroService.remove(+id);
  }
}
