import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EnderecoService } from './endereco.service';
import { CreateEnderecoDto } from './dto/create-endereco.dto';
import { Endereco } from './entities/endereco.entity';

@Controller('endereco')
export class EnderecoController {
  constructor(private readonly enderecoService: EnderecoService) { }

  @Post()
  async create(@Body() data: CreateEnderecoDto): Promise<Endereco> {
    return await this.enderecoService.create(data);
  }

  @Get()
  async getAll(): Promise<Endereco[]> {
    return await this.enderecoService.getAll();
  }

  @Get(':id')
  async getById(@Param('id') id: string): Promise<Endereco> {
    return await this.enderecoService.getById(+id);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<Endereco> {
    return await this.enderecoService.remove(+id);
  }
}
