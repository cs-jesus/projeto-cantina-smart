import { Controller, Body, Param, Post, Patch, Delete, Get } from "@nestjs/common";

import { CreateCidadeUseCase } from "src/application/use-cases/cidade/create-cidade.use-case";
import { UpdateCidadeUseCase } from "src/application/use-cases/cidade/update-cidade.use-case";
import { DeleteCidadeUseCase } from "src/application/use-cases/cidade/delete-cidade.use-case";
import { FindAllCidades } from "src/application/use-cases/cidade/find-all-cidades.use-case";
import { FindCidadeByIdUseCase } from "src/application/use-cases/cidade/find-cidade-by-id.use-case";
import { FindCidadeByNameUseCase } from "src/application/use-cases/cidade/find-cidade-by-name.use-case";

import { CreateCidadeDto } from "../dto/create-cidade.dto";
import { UpdateCidadeDto } from "../dto/update-cidade.dto";

@Controller('cidade')
export class CidadeController {
    constructor(
        private readonly createCidadeUseCase: CreateCidadeUseCase,
        private readonly updateCidadeUseCase: UpdateCidadeUseCase,
        private readonly deleteCidadeUseCase: DeleteCidadeUseCase,
        private readonly findAllCidadesUseCase: FindAllCidades,
        private readonly findCidadeByIdUseCase: FindCidadeByIdUseCase,
        private readonly findCidadeByNameUseCase: FindCidadeByNameUseCase,
    ) { }

    @Post()
    async create(@Body() createCidadeDto: CreateCidadeDto) {
        return this.createCidadeUseCase.execute(createCidadeDto.nome);
    }

    @Patch(':id')
    async update(@Param('id') id: number, @Body() updateCidadeDto: UpdateCidadeDto) {
        return this.updateCidadeUseCase.execute(+id, updateCidadeDto.nome);
    }

    @Delete(':id')
    async delete(@Param('id') id: number) {
        return this.deleteCidadeUseCase.execute(+id);
    }

    @Get()
    async findAll() {
        return this.findAllCidadesUseCase.execute();
    }

    @Get(':id')
    async findById(@Param('id') id: number) {
        return this.findCidadeByIdUseCase.execute(+id);
    }

    @Get("name/:name")
    async findByName(@Param("name") name: string) {
        return this.findCidadeByNameUseCase.execute(name);
    }
}
