import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EndrecoService } from './endreco.service';
import { CreateEndrecoDto } from './dto/create-endreco.dto';
import { UpdateEndrecoDto } from './dto/update-endreco.dto';

@Controller('endreco')
export class EndrecoController {
  constructor(private readonly endrecoService: EndrecoService) { }

  @Post()
  create(@Body() createEndrecoDto: CreateEndrecoDto) {
    return this.endrecoService.create(createEndrecoDto);
  }

  @Get()
  getAll() {
    return this.endrecoService.getAll();
  }

  @Get(':id')
  getById(@Param('id') id: string) {
    return this.endrecoService.getById(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEndrecoDto: UpdateEndrecoDto) {
    return this.endrecoService.update(+id, updateEndrecoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.endrecoService.remove(+id);
  }
}
