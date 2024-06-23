import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FuncionarioFilialService } from './funcionario-filial.service';
import { CreateFuncionarioFilialDto } from './dto/create-funcionario-filial.dto';
import { UpdateFuncionarioFilialDto } from './dto/update-funcionario-filial.dto';

@Controller('funcionario-filial')
export class FuncionarioFilialController {
  constructor(private readonly funcionarioFilialService: FuncionarioFilialService) {}

  @Post()
  create(@Body() createFuncionarioFilialDto: CreateFuncionarioFilialDto) {
    return this.funcionarioFilialService.create(createFuncionarioFilialDto);
  }

  @Get()
  findAll() {
    return this.funcionarioFilialService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.funcionarioFilialService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFuncionarioFilialDto: UpdateFuncionarioFilialDto) {
    return this.funcionarioFilialService.update(+id, updateFuncionarioFilialDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.funcionarioFilialService.remove(+id);
  }
}
