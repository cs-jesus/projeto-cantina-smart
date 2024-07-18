import { Controller, Body, Param, Post, Patch, Delete, Get } from '@nestjs/common';

import { CreateEnderecoUseCase } from 'src/application/use-cases/endereco/create-endereco.use-case';;
import { UpdateEnderecoUseCase } from 'src/application/use-cases/endereco/update-endereco.use-case';
import { DeleteEnderecoUseCase } from 'src/application/use-cases/endereco/delete-endereco.use-case';
import { FindAllEnderecosUseCase } from 'src/application/use-cases/endereco/find-all-enderecos.use-case';
import { FindEnderecoByIdUseCase } from 'src/application/use-cases/endereco/find-endereco-by-id.use-case'

import { CreateEnderecoDto } from '../dto/create-endereco.dto';
import { UpdateEnderecoDto } from '../dto/update-endereco.dto';



@Controller('endereco')
export class EnderecoController {
    constructor(
        private readonly createEnderecoUseCase: CreateEnderecoUseCase,
        private readonly updateEnderecoUseCase: UpdateEnderecoUseCase,
        private readonly deleteEnderecoUseCase: DeleteEnderecoUseCase,
        private readonly findAllEnderecosUseCase: FindAllEnderecosUseCase,
        private readonly findEnderecoByIdUseCase: FindEnderecoByIdUseCase,

    ) { }

    @Post()
    async create(@Body() createEnderecoDto: CreateEnderecoDto) {
        return this.createEnderecoUseCase.execute(createEnderecoDto);
    }

    @Patch(':id')
    async update(@Param('id') id: number, @Body() updateEnderecoDto: UpdateEnderecoDto) {
        return this.updateEnderecoUseCase.execute(id, updateEnderecoDto);
    }

    @Delete(':id')
    async delete(@Param('id') id: number) {
        return this.deleteEnderecoUseCase.execute(id);
    }

    @Get()
    async findAll() {
        return this.findAllEnderecosUseCase.execute();
    }

    @Get(':id')
    async findById(@Param('id') id: number) {
        return this.findEnderecoByIdUseCase.execute(id);
    }
}
