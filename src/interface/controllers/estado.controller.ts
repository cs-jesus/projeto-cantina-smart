import { Controller, Body, Param, Post, Patch, Delete, Get } from "@nestjs/common";

import { CreateEstadoUseCase } from 'src/application/use-cases/estado/create-estado.use-case';
import { UpdateEstadoUseCase } from 'src/application/use-cases/estado/update-estado.use-case';
import { DeleteEstadoUseCase } from 'src/application/use-cases/estado/delete-estado.use-case';
import { FindAllEstados } from 'src/application/use-cases/estado/find-all-estados.use-case';
import { FindEstadoByIdUseCase } from 'src/application/use-cases/estado/find-estado-by-id.use-case';
import { FindEstadoByUfUseCase } from 'src/application/use-cases/estado/find-estado-by-uf.use-case';

import { CreateEstadoDto } from '../dto/create-estado.dto';
import { UpdateEstadoDto } from '../dto/update-estado.dto';


@Controller('estado')
export class EstadoController {
    constructor(
        private readonly createEstadoUseCase: CreateEstadoUseCase,
        private readonly updateEstadoUseCase: UpdateEstadoUseCase,
        private readonly deleteEstadoUseCase: DeleteEstadoUseCase,
        private readonly findAllEstadosUseCase: FindAllEstados,
        private readonly findEstadoByIdUseCase: FindEstadoByIdUseCase,
        private readonly findEstadoByNameUseCase: FindEstadoByUfUseCase,
    ) { }

    @Post()
    async create(@Body() createEstadoDto: CreateEstadoDto) {
        return this.createEstadoUseCase.execute(createEstadoDto.nome);
    }

    @Patch(':id')
    async update(@Param('id') id: number, @Body() updateEstadoDto: UpdateEstadoDto) {
        return this.updateEstadoUseCase.execute(+id, updateEstadoDto.nome);
    }

    @Delete(':id')
    async delete(@Param('id') id: number) {
        return this.deleteEstadoUseCase.execute(+id);
    }

    @Get()
    async findAll() {
        return this.findAllEstadosUseCase.execute();
    }

    @Get(':id')
    async findById(@Param('id') id: number) {
        return this.findEstadoByIdUseCase.execute(+id);
    }

    @Get('name/:name')
    async findByName(@Param('name') name: string) {
        return this.findEstadoByNameUseCase.execute(name);
    }
}
