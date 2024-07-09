import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PoloService } from './polo.service';
import { CreatePoloDto } from './dto/create-polo.dto';
import { UpdatePoloDto } from './dto/update-polo.dto';
import { Polo } from './entities/polo.entity';

@Controller('polo')
export class PoloController {
  constructor(private readonly poloService: PoloService) { }

  @Post()
  async create(@Body() data: CreatePoloDto): Promise<Polo> {
    return await this.poloService.create(data);
  }

  @Get()
  async getAll(): Promise<Polo[]> {
    return await this.poloService.getAll();
  }

  @Get(':id')
  async getById(@Param('id') id: string): Promise<Polo> {
    return await this.poloService.getById(+id);
  }

  @Get(':instituicao/fk')
  async getByInstituicao(@Param('instituicaoId') instituicaoId: string): Promise<Polo[]> {
    return await this.poloService.getByInstituicao(+instituicaoId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePoloDto: UpdatePoloDto) {
    return this.poloService.update(+id, updatePoloDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<Polo> {
    return await this.poloService.remove(+id);
  }
}
