import { Module } from "@nestjs/common";
import { PrismaModule } from "../prisma/prisma.module";

import { FisicaService } from "src/domain/services/fisica.service";

import { CreateFisicaUseCase } from "src/application/use-cases/fisica/create-fisica.use-case";
import { UpdateFisicaUseCase } from "src/application/use-cases/fisica/update-fisica.use-case";
import { DeleteFisicaUseCase } from "src/application/use-cases/fisica/delete-fisica.use-case";
import { FindAllFisica } from "src/application/use-cases/fisica/find-all-fisicas.use-case";
import { FindFisicaByIdUseCase } from "src/application/use-cases/fisica/find-fisica-by-id.use-case";
import { FindFisicaByNameUseCase } from "src/application/use-cases/fisica/find-fisica-by-cpf.use-case";




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
