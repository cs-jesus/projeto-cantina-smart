import { Module } from "@nestjs/common";
import { PrismaModule } from "../prisma/prisma.module";

import { EstabelecimentoService } from "src/domain/services/estabelecimento.service";

import { CreateEstabelecimentoUseCase } from "src/application/use-cases/estabelecimento/create-estabelecimento.use-case";
import { UpdateEstabelecimentoUseCase } from "src/application/use-cases/estabelecimento/update-estabelecimento.use-case";
import { DeleteEstabelecimentoUseCase } from "src/application/use-cases/estabelecimento/delete-estabelecimento.use-case";

import { FindEstabelecimentoByIdUseCase } from "src/application/use-cases/estabelecimento/find-estabelecimento-by-id.use-case";
import { FindEstabelecimentoByCNPJUseCase } from "src/application/use-cases/estabelecimento/find-estabelecimento-by-name.use-case";
import { PrismaTipoEstabelecimentoRepository } from "../repositories/prisma/prisma-tipo-estabelecimento.repository";

@Module({
    imports: [PrismaModule],
    exports: [EstabelecimentoService],
    controllers: [],

    providers: [
        EstabelecimentoService,

        CreateEstabelecimentoUseCase,
        UpdateEstabelecimentoUseCase,
        DeleteEstabelecimentoUseCase,

        FindEstabelecimentoByIdUseCase,
        FindEstabelecimentoByCNPJUseCase,

        {
            provide: 'EstabelecimentoRepository',
            useClass: PrismaTipoEstabelecimentoRepository
        },
    ],

}) export class EstabelecimentoModule { }
