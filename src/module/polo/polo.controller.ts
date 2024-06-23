import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PoloService } from './polo.service';
import { CreatePoloDto } from './dto/create-polo.dto';
import { UpdatePoloDto } from './dto/update-polo.dto';

@Controller('polo')
export class PoloController {
  constructor(private readonly poloService: PoloService) { }

  @Post()
  create(@Body() createPoloDto: CreatePoloDto) {
    return this.poloService.create(createPoloDto);
  }

  @Get()
  getAll() {
    return this.poloService.getAll();
  }

  @Get(':id')
  getById(@Param('id') id: string) {
    return this.poloService.getById(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePoloDto: UpdatePoloDto) {
    return this.poloService.update(+id, updatePoloDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.poloService.remove(+id);
  }
}
