import { Controller, Post, Get, Param, Body, Patch, Delete } from '@nestjs/common';
import { CreateTipoInstituicaoUseCase } from '../../application/use-cases/tipo-instituicao/create-tipo-instituicao.use-case';
import { GetTipoInstituicoesUseCase } from '../../application/use-cases/tipo-instituicao/find-all-tipo-instituicoes.use-case';
import { GetTipoInstituicaoByIdUseCase } from '../../application/use-cases/tipo-instituicao/find-tipo-instituicao-by-id.use-case';
import { UpdateTipoInstituicaoUseCase } from '../../application/use-cases/tipo-instituicao/update-tipo-instituicao.use-case';
import { DeleteTipoInstituicaoUseCase } from '../../application/use-cases/tipo-instituicao/delete-tipo-instituicao.use-case';
import { ValidateTipoInstituicaoNameUseCase } from '../../application/use-cases/tipo-instituicao/validate-tipo-instituicao-name.use-case';
import { CreateTipoInstituicaoDto } from '../dto/create-tipo-instituicao.dto';
import { UpdateTipoInstituicaoDto } from '../dto/update-tipo-instituicao.dto';

@Controller('tipo-instituicao')
export class TipoInstituicaoController {
  constructor(
    private readonly createTipoInstituicaoUseCase: CreateTipoInstituicaoUseCase,
    private readonly getTipoInstituicoesUseCase: GetTipoInstituicoesUseCase,
    private readonly getTipoInstituicaoByIdUseCase: GetTipoInstituicaoByIdUseCase,
    private readonly updateTipoInstituicaoUseCase: UpdateTipoInstituicaoUseCase,
    private readonly deleteTipoInstituicaoUseCase: DeleteTipoInstituicaoUseCase,
    private readonly validateTipoInstituicaoNameUseCase: ValidateTipoInstituicaoNameUseCase
  ) { }

  @Post()
  async create(@Body() createTipoInstituicaoDto: CreateTipoInstituicaoDto) {
    return this.createTipoInstituicaoUseCase.execute(createTipoInstituicaoDto.descricao);
  }

  @Get()
  async findAll() {
    return this.getTipoInstituicoesUseCase.execute();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.getTipoInstituicaoByIdUseCase.execute(id);
  }

  @Patch(':id')
  async update(@Param('id') id: number, @Body() updateTipoInstituicaoDto: UpdateTipoInstituicaoDto) {
    return this.updateTipoInstituicaoUseCase.execute(id, updateTipoInstituicaoDto.descricao);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return this.deleteTipoInstituicaoUseCase.execute(id);
  }

  @Get('/validate/:descricao')
  async validate(@Param('descricao') descricao: string) {
    return this.validateTipoInstituicaoNameUseCase.execute(descricao);
  }
}
