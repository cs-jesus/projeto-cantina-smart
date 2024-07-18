import { Module } from "@nestjs/common";
import { PrismaModule } from "../prisma/prisma.module";

import { LogradouroService } from "src/domain/services/logradouro.service";
import { LogradouroController } from "src/interface/controllers/logradouro.controller";
import { PrismaLogradouroRepository } from "../repositories/prisma/prisma-logradouro.repository";

import { CreateLogradouroUseCase } from "src/application/use-cases/logradouro/create-logradouro.use-case";
import { UpdateLogradouroUseCase } from "src/application/use-cases/logradouro/update-logradouro.use-case";
import { DeleteLogradouroUseCase } from "src/application/use-cases/logradouro/delete-logradouro.use-case";
import { FindAllLogradouros } from "src/application/use-cases/logradouro/find-all-logradouros.use-case";
import { FindLogradouroByIdUseCase } from "src/application/use-cases/logradouro/find-logradouro-by-id.use-case";
import { FindLogradouroByNameUseCase } from "src/application/use-cases/logradouro/find-logradouro-by-name.use-case";

@Module({
    imports: [PrismaModule],
    exports: [LogradouroService],
    controllers: [LogradouroController],

    providers: [
        LogradouroService,
        PrismaLogradouroRepository,

        CreateLogradouroUseCase,
        UpdateLogradouroUseCase,
        DeleteLogradouroUseCase,
        FindAllLogradouros,
        FindLogradouroByIdUseCase,
        FindLogradouroByNameUseCase,

        {
            provide: 'LogradouroRepository',
            useClass: PrismaLogradouroRepository
        },
    ],

}) export class LogradouroModule { }
