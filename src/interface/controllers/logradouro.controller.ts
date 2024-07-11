import { Body, Controller, Post } from "@nestjs/common";
import { CreateLogradouroUseCase } from "src/application/use-cases/logradouro/create-logradouro.use-case";
import { CreateLogradouroDto } from "../dto/create-logradouro.dto";

@Controller('logradouro')
export class LogradouroController {
    constructor(
        private readonly createLogradouroUseCase: CreateLogradouroUseCase,

    ) {}

    @Post()
    async create(@Body() createLogradouroDto: CreateLogradouroDto) {
        return this.createLogradouroUseCase.execute(createLogradouroDto.nome);
    }
}