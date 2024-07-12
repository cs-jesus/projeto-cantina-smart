import { Controller, Body, Param, Post, Patch, Delete, Get } from "@nestjs/common";

import { CreateTipoInstituicaoUseCase } from "src/application/use-cases/tipo-instituicao/create-tipo-instituicao.use-case";
import { UpdateTipoInstituicaoUseCase } from "src/application/use-cases/tipo-instituicao/update-tipo-instituicao.use-case";
import { DeleteTipoInstituicaoUseCase } from "src/application/use-cases/tipo-instituicao/delete-tipo-instituicao.use-case";
import { FindAllTipoInstituicoesUseCase } from "src/application/use-cases/tipo-instituicao/find-all-tipo-instituicoes.use-case";
import { FindTipoInstituicaoByDescricaoUseCase } from "src/application/use-cases/tipo-instituicao/find-tipo-instituicao-by-descricao-use-case";
import { FindTipoInstituicaoByIdUseCase } from "src/application/use-cases/tipo-instituicao/find-tipo-instituicao-by-id.use-case";

import { CreateTipoInstituicaoDto } from '../dto/create-tipo-instituicao.dto';
import { UpdateTipoInstituicaoDto } from '../dto/update-tipo-instituicao.dto';

@Controller('tipo-instituicao')
export class TipoInstituicaoController {
    constructor(
        private readonly createTipoInstituicaoUseCase: CreateTipoInstituicaoUseCase,
        private readonly updateTipoInstituicaoUseCase: UpdateTipoInstituicaoUseCase,
        private readonly deleteTipoInstituicaoUseCase: DeleteTipoInstituicaoUseCase,
        private readonly findAllTipoInstituicoesUseCase: FindAllTipoInstituicoesUseCase,
        private readonly findTipoInstituicaoByIdUseCase: FindTipoInstituicaoByIdUseCase,
        private readonly findTipoInstituicaoByDescricaoUseCase: FindTipoInstituicaoByDescricaoUseCase,

    ) { }

    @Post()
    async create(@Body() createTipoInstituicaoDto: CreateTipoInstituicaoDto) {
        return this.createTipoInstituicaoUseCase.execute(createTipoInstituicaoDto.descricao);
    }

    @Patch(':id')
    async update(@Param('id') id: number, @Body() updateTipoInstituicaoDto: UpdateTipoInstituicaoDto) {
        return this.updateTipoInstituicaoUseCase.execute(+id, updateTipoInstituicaoDto.descricao);
    }

    @Delete(':id')
    async remove(@Param('id') id: number) {
        return this.deleteTipoInstituicaoUseCase.execute(+id);
    }

    @Get()
    async findAll() {
        return this.findAllTipoInstituicoesUseCase.execute();
    }

    @Get(':id')
    async findById(@Param('id') id: number) {
        return this.findTipoInstituicaoByIdUseCase.execute(+id);
    }

    @Get('descricao/:descricao') 
    async findByDescricao(@Param('descricao') descricao: string ) {
        return this.findTipoInstituicaoByDescricaoUseCase.execute(descricao);
    }
}
