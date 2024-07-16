import { Module } from "@nestjs/common";
import { PrismaModule } from "../prisma/prisma.module";

import { EstabelecimentoService } from "src/domain/services/Estabelecimento.service";
import { EstabelecimentoController } from "src/interface/controllers/Estabelecimento.controller";
import { PrismaEstabelecimentoRepository } from "../repositories/prisma/prisma-Estabelecimento.repository";

import { CreateEstabelecimentoUseCase } from "src/application/use-cases/Estabelecimento/create-Estabelecimento.use-case";
import { UpdateEstabelecimentoUseCase } from "src/application/use-cases/Estabelecimento/update-Estabelecimento.use-case";
import { DeleteEstabelecimentoUseCase } from "src/application/use-cases/Estabelecimento/delete-Estabelecimento.use-case";
import { FindAllEstabelecimento } from "src/application/use-cases/Estabelecimento/find-all-Estabelecimento.use-case";
import { FindEstabelecimentoByIdUseCase } from "src/application/use-cases/Estabelecimento/find-Estabelecimento-by-id.use-case";
import { FindEstabelecimentoByNameUseCase } from "src/application/use-cases/Estabelecimento/find-Estabelecimento-by-name.use-case";

@Module({
    imports: [PrismaModule],
    exports: [EstabelecimentoService],
    controllers: [EstabelecimentoController],

    providers: [
        EstabelecimentoService,

        CreateEstabelecimentoUseCase,
        UpdateEstabelecimentoUseCase,
        DeleteEstabelecimentoUseCase,
        FindAllEstabelecimento,
        FindEstabelecimentoByIdUseCase,
        FindEstabelecimentoByNameUseCase,

        {
            provide: 'EstabelecimentoRepository',
            useClass: PrismaEstabelecimentoRepository
        },
    ],

}) export class EstabelecimentoModule { }
