import { Module } from "@nestjs/common";
import { LogradouroController } from "src/interface/controllers/logradouro.controller";
import { PrismaLogradouroRepository } from "../repositories/prisma/prisma-logradouro.repository";
import { LogradouroService } from "src/domain/service/logradouro.service";
import { CreateLogradouroUseCase } from "src/application/use-cases/logradouro/create-logradouro.use-case";

import { PrismaModule } from "../prisma/prisma.module";
import { UpdateLogradouroUseCase } from "src/application/use-cases/logradouro/update-logradouro.use-case";

@Module({
    imports: [PrismaModule],
    controllers: [LogradouroController],

    providers: [
        LogradouroService,
        CreateLogradouroUseCase,
        UpdateLogradouroUseCase,


        {
            provide: 'LogradouroRepository',
            useClass: PrismaLogradouroRepository
        },
    ],

    exports: [LogradouroService],
})

export class LogradouroModule { }