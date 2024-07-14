import { Module } from "@nestjs/common";
import { PrismaModule } from "../prisma/prisma.module";

import { InstituicaoService } from "src/domain/services/instituicao.service";
import { InstituicaoController } from "src/interface/controllers/instituicao.controller";
import { PrismaInstituicaoRepository } from "../repositories/prisma/prisma-instituicao.repository";

import { CreateInstituicaoUseCase } from "src/application/use-cases/instituicao/create-instituicao.use-case";
import { DeleteInstituicaoUseCase } from "src/application/use-cases/instituicao/delete-instituicao.use-case";
import { UpdateInstituicaoUseCase } from "src/application/use-cases/instituicao/update-instituicao.use-case";
import { FindAllInstituicoesUseCase } from "src/application/use-cases/instituicao/find-all-instituicoes.use-case";
import { FindInstituicaoByIdUseCase } from "src/application/use-cases/instituicao/find-instituicao-by-id.use-case";
import { FindInstituicaoByNameUseCase } from "src/application/use-cases/instituicao/find-instituicao-by-name-use-case";

@Module({
    imports: [PrismaModule],
    exports: [InstituicaoService],
    controllers: [InstituicaoController],

    providers: [
        InstituicaoService,
        PrismaInstituicaoRepository,

        CreateInstituicaoUseCase,
        UpdateInstituicaoUseCase,
        DeleteInstituicaoUseCase,
        FindAllInstituicoesUseCase,
        FindInstituicaoByIdUseCase,
        FindInstituicaoByNameUseCase,

        {
            provide: 'InstituicaoRepository',
            useClass: PrismaInstituicaoRepository
        },
    ],

}) export class InstituicaoModule { }
