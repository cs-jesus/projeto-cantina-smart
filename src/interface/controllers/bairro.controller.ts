import { Controller, Body, Param, Post, Patch, Delete, Get } from "@nestjs/common";

import { CreateBairroUseCase } from "src/application/use-cases/bairro/create-bairro.use-case";
import { UpdateBairroUseCase } from "src/application/use-cases/bairro/update-bairro.use-case";
import { DeleteBairroUseCase } from "src/application/use-cases/bairro/delete-bairro.use-case";
import { FindAllBairros } from "src/application/use-cases/bairro/find-all-bairros.use-case";
import { FindBairroByIdUseCase } from "src/application/use-cases/bairro/find-bairro-by-id.use-case";
import { FindBairroByNameUseCase } from "src/application/use-cases/bairro/find-bairro-by-name.use-case";

import { CreateBairroDto } from "../dto/create-bairro.dto";
import { UpdateBairroDto } from "../dto/update-bairro.dto";

@Controller('bairro')
export class BairroController {
    constructor(
        private readonly createBairroUseCase: CreateBairroUseCase,
        private readonly updateBairroUseCase: UpdateBairroUseCase,
        private readonly deleteBairroUseCase: DeleteBairroUseCase,
        private readonly findAllBairrosUseCase: FindAllBairros,
        private readonly findBairroByIdUseCase: FindBairroByIdUseCase,
        private readonly findBairroByNameUseCase: FindBairroByNameUseCase,
    ) { }

    @Post()
    async create(@Body() createBairroDto: CreateBairroDto) {
        return this.createBairroUseCase.execute(createBairroDto.nome);
    }

    @Patch(':id')
    async update(@Param('id') id: number, @Body() updateBairroDto: UpdateBairroDto) {
        return this.updateBairroUseCase.execute(+id, updateBairroDto.nome);
    }

    @Delete(':id')
    async delete(@Param('id') id: number) {
        return this.deleteBairroUseCase.execute(+id);
    }

    @Get()
    async findAll() {
        return this.findAllBairrosUseCase.execute();
    }

    @Get(':id')
    async findById(@Param('id') id: number) {
        return this.findBairroByIdUseCase.execute(+id);
    }

    @Get('name/:name')
    async findByName(@Param('name') name: string) {
        return this.findBairroByNameUseCase.execute(name);
    }
}
