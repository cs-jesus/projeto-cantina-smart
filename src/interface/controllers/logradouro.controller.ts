import { Controller, Body, Param, Post, Patch, Delete, Get } from "@nestjs/common";

import { CreateLogradouroUseCase } from "src/application/use-cases/logradouro/create-logradouro.use-case";
import { UpdateLogradouroUseCase } from "src/application/use-cases/logradouro/update-logradouro.use-case";
import { DeleteLogradouroUseCase } from "src/application/use-cases/logradouro/delete-logradouro.use-case";
import { FindAllLogradouros } from "src/application/use-cases/logradouro/find-all-logradouros.use-case";
import { FindLogradouroByIdUseCase } from "src/application/use-cases/logradouro/find-logradouro-by-id.use-case";
import { FindLogradouroByNameUseCase } from "src/application/use-cases/logradouro/find-logradouro-by-name.use-case";

import { CreateLogradouroDto } from "../dto/create-logradouro.dto";
import { UpdateLogradouroDto } from "../dto/update-logradouro.dto";

@Controller('logradouro')
export class LogradouroController {
    constructor(
        private readonly createLogradouroUseCase: CreateLogradouroUseCase,
        private readonly updateLogradouroUseCase: UpdateLogradouroUseCase,
        private readonly deleteLogradouroUseCase: DeleteLogradouroUseCase,
        private readonly findAllLogradourosUseCase: FindAllLogradouros,
        private readonly findLogradouroByIdUseCase: FindLogradouroByIdUseCase,
        private readonly findLogradouroByNameUseCase: FindLogradouroByNameUseCase,
    ) { }

    @Post()
    async create(@Body() createLogradouroDto: CreateLogradouroDto) {
        return this.createLogradouroUseCase.execute(createLogradouroDto.nome);
    }

    @Patch(':id')
    async update(@Param('id') id: number, @Body() updateLogradouroDto: UpdateLogradouroDto) {
        return this.updateLogradouroUseCase.execute(+id, updateLogradouroDto.nome);
    }

    @Delete(':id')
    async delete(@Param('id') id: number) {
        return this.deleteLogradouroUseCase.execute(+id);
    }

    @Get()
    async findAll() {
        return this.findAllLogradourosUseCase.execute();
    }

    @Get(':id')
    async findById(@Param('id') id: number) {
        return this.findLogradouroByIdUseCase.execute(+id);
    }

    @Get('name/:name')
    async findByName(@Param('name') name: string) {
        return this.findLogradouroByNameUseCase.execute(name);
    }
}
