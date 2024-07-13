import { Controller, Post, Get, Param, Body, Patch, Delete } from '@nestjs/common';

import { CreateInstituicaoUseCase } from 'src/application/use-cases/instituicao/create-instituicao.use-case';
import { DeleteInstituicaoUseCase } from 'src/application/use-cases/instituicao/delete-instituicao.use-case';
import { UpdateInstituicaoUseCase } from 'src/application/use-cases/instituicao/update-instituicao.use-case';
import { FindAllInstituicoesUseCase } from 'src/application/use-cases/instituicao/find-all-instituicoes.use-case';
import { FindInstituicaoByIdUseCase } from 'src/application/use-cases/instituicao/find-instituicao-by-id.use-case';
import { FindInstituicaoByNameUseCase } from 'src/application/use-cases/instituicao/find-instituicao-by-name-use-case';

import { CreateInstituicaoDto } from '../dto/create-instituicao.dto';
import { UpdateInstituicaoDto } from '../dto/update-instituicao.dto';

@Controller('instituicao')
export class InstituicaoController {
    constructor(
        private readonly createInstituicaoUseCase: CreateInstituicaoUseCase,
        private readonly updateInstituicaoUseCase: UpdateInstituicaoUseCase,
        private readonly deleteInstituicaoUseCase: DeleteInstituicaoUseCase,
        private readonly findAllInstituicoesUseCase: FindAllInstituicoesUseCase,
        private readonly findInstituicaoByIdUseCase: FindInstituicaoByIdUseCase,
        private readonly findInstituicaoByNameUseCase: FindInstituicaoByNameUseCase,

    ) { }

    @Post()
    async create(@Body() createInstituicaoDto: CreateInstituicaoDto) {
        return this.createInstituicaoUseCase.execute(
            createInstituicaoDto.tipoInstituicaoId,
            createInstituicaoDto.nome,
            createInstituicaoDto.sigla,
        );
    }

    @Patch(':id')
    async update(@Param('id') id: number, @Body() updateInstituicaoDto: UpdateInstituicaoDto) {
        return this.updateInstituicaoUseCase.execute(
            +id,
            updateInstituicaoDto.tipoInstituicaoId,
            updateInstituicaoDto.nome,
            updateInstituicaoDto.sigla,
        );
    }

    @Delete(':id')
    async remove(@Param('id') id: number) {
        return this.deleteInstituicaoUseCase.execute(id);
    }

    @Get()
    async findAll() {
        return this.findAllInstituicoesUseCase.execute();
    }

    @Get(':id')
    async findById(@Param('id') id: number) {
        return this.findInstituicaoByIdUseCase.execute(id);
    }

    @Get('nome/:nome')
    async findByName(@Param('nome') nome: string) {
        return this.findInstituicaoByNameUseCase.execute(nome);
    }
}
