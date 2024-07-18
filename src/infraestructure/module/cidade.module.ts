import { Module } from "@nestjs/common";
import { PrismaModule } from "../prisma/prisma.module";

import { CidadeService } from "src/domain/services/cidade.service";
import { CidadeController } from "src/interface/controllers/cidade.controller";
import { PrismaCidadeRepository } from "../repositories/prisma/prisma-cidade.repository";

import { CreateCidadeUseCase } from "src/application/use-cases/cidade/create-cidade.use-case";
import { DeleteCidadeUseCase } from "src/application/use-cases/cidade/delete-cidade.use-case";
import { FindAllCidadesUseCase } from "src/application/use-cases/cidade/find-all-cidades.use-case";
import { FindCidadeByIdUseCase } from "src/application/use-cases/cidade/find-cidade-by-id.use-case";
import { FindCidadeByNameUseCase } from "src/application/use-cases/cidade/find-cidade-by-name.use-case";
import { UpdateCidadeUseCase } from "src/application/use-cases/cidade/update-cidade.use-case";

@Module({
    imports: [PrismaModule],
    exports: [CidadeService],
    controllers: [CidadeController],

    providers: [
        CidadeService,
        PrismaCidadeRepository,

        CreateCidadeUseCase,
        UpdateCidadeUseCase,
        DeleteCidadeUseCase,
        FindAllCidadesUseCase,
        FindCidadeByIdUseCase,
        FindCidadeByNameUseCase,

        {
            provide: 'CidadeRepository',
            useClass: PrismaCidadeRepository
        },
    ],

}) export class CidadeModule { }
