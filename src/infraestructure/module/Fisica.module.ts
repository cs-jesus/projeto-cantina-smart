import { Module } from "@nestjs/common";
import { PrismaModule } from "../prisma/prisma.module";

import { FisicaService } from "src/domain/services/Fisica.service";
import { FisicaController } from "src/interface/controllers/Fisica.controller";
import { PrismaFisicaRepository } from "../repositories/prisma/prisma-Fisica.repository";

import { CreateFisicaUseCase } from "src/application/use-cases/Fisica/create-Fisica.use-case";
import { UpdateFisicaUseCase } from "src/application/use-cases/Fisica/update-Fisica.use-case";
import { DeleteFisicaUseCase } from "src/application/use-cases/Fisica/delete-Fisica.use-case";
import { FindAllFisica } from "src/application/use-cases/Fisica/find-all-Fisica.use-case";
import { FindFisicaByIdUseCase } from "src/application/use-cases/Fisica/find-Fisica-by-id.use-case";
import { FindFisicaByNameUseCase } from "src/application/use-cases/Fisica/find-Fisica-by-name.use-case";

@Module({
    imports: [PrismaModule],
    exports: [FisicaService],
    controllers: [FisicaController],

    providers: [
        FisicaService,

        CreateFisicaUseCase,
        UpdateFisicaUseCase,
        DeleteFisicaUseCase,
        FindAllFisica,
        FindFisicaByIdUseCase,
        FindFisicaByNameUseCase,

        {
            provide: 'FisicaRepository',
            useClass: PrismaJuridicaRepository
        },
    ],

}) export class FisicaModule { }
