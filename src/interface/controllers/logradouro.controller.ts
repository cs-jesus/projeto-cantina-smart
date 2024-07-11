import { Body, Controller, Param, Patch, Post } from "@nestjs/common";
import { CreateLogradouroUseCase } from "src/application/use-cases/logradouro/create-logradouro.use-case";
import { UpdateLogradouroUseCase } from "src/application/use-cases/logradouro/update-logradouro.use-case";

import { CreateLogradouroDto } from "../dto/create-logradouro.dto";
import { UpdateLogradouroDto } from "../dto/update-logradouro.dto";

@Controller('logradouro')
export class LogradouroController {
    constructor(
        private readonly createLogradouroUseCase: CreateLogradouroUseCase,
        private readonly updateLogradouroUseCase: UpdateLogradouroUseCase,

    ) { }

    @Post()
    async create(@Body() createLogradouroDto: CreateLogradouroDto) {
        return this.createLogradouroUseCase.execute(createLogradouroDto.nome);
    }

    @Patch(':id')
    async update(@Param('id') id: number, @Body() updateLogradouroDto: UpdateLogradouroDto) {
        return this.updateLogradouroUseCase.execute(+id, updateLogradouroDto.nome);
    }
}