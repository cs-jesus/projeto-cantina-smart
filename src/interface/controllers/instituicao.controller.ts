import { Controller, Post, Get, Param, Body, Patch, Delete } from '@nestjs/common';
import { CreateInstituicaoUseCase } from 'src/application/use-cases/instituicao/create-instituicao.use-case';
import { DeleteInstituicaoUseCase } from 'src/application/use-cases/instituicao/delete-instituicao.use-case';
import { GetInstituicaoByIdUseCase } from 'src/application/use-cases/instituicao/get-instituicao-by-id.use-case';
import { GetInstituicoesUseCase } from 'src/application/use-cases/instituicao/get-instituicoes.use-case';
import { UpdateInstituicaoUseCase } from 'src/application/use-cases/instituicao/update-instituicao.use-case';
import { ValidateInstituicaoNameUseCase } from 'src/application/use-cases/instituicao/validate-instituicao-name.use-case';
import { CreateInstituicaoDto } from '../dto/create-instituicao.dto';
import { UpdateInstituicaoDto } from '../dto/update-instituicao.dto';


@Controller('instituicao')
export class InstituicaoController {
  constructor(
    private readonly createInstituicaoUseCase: CreateInstituicaoUseCase,
    private readonly getInstituicoesUseCase: GetInstituicoesUseCase,
    private readonly getInstituicaoByIdUseCase: GetInstituicaoByIdUseCase,
    private readonly updateInstituicaoUseCase: UpdateInstituicaoUseCase,
    private readonly deleteInstituicaoUseCase: DeleteInstituicaoUseCase,
    private readonly validateInstituicaoNameUseCase: ValidateInstituicaoNameUseCase
  ) {}

  @Post()
  async create(@Body() createInstituicaoDto: CreateInstituicaoDto) {
    return this.createInstituicaoUseCase.execute(
      createInstituicaoDto.nome,
      createInstituicaoDto.sigla,
      createInstituicaoDto.tipoInstituicaoId
    );
  }

  @Get()
  async findAll() {
    return this.getInstituicoesUseCase.execute();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.getInstituicaoByIdUseCase.execute(id);
  }

  @Patch(':id')
  async update(@Param('id') id: number, @Body() updateInstituicaoDto: UpdateInstituicaoDto) {
    return this.updateInstituicaoUseCase.execute(
      id,
      updateInstituicaoDto.nome,
      updateInstituicaoDto.sigla,
      updateInstituicaoDto.tipoInstituicaoId
    );
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return this.deleteInstituicaoUseCase.execute(id);
  }

  @Get('/validate/:nome')
  async validate(@Param('nome') nome: string) {
    return this.validateInstituicaoNameUseCase.execute(nome);
  }
}