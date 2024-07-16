import { Module } from "@nestjs/common";
import { PrismaModule } from "../prisma/prisma.module";

import { FilialService } from "src/domain/services/Filial.service";
import { FilialController } from "src/interface/controllers/Filial.controller";
import { PrismaFilialRepository } from "../repositories/prisma/prisma-Estabelecimento.repository";

import { CreateFilialUseCase } from "src/application/use-cases/Filial/create-Filial.use-case";
import { UpdateFilialUseCase } from "src/application/use-cases/Filial/update-Filial.use-case";
import { DeleteFilialUseCase } from "src/application/use-cases/Filialo/delete-Filial.use-case";
import { FindAllFilial } from "src/application/use-cases/EFilial/find-all-Filial.use-case";
import { FindFilialByIdUseCase } from "src/application/use-cases/Filial/find-Filial-by-id.use-case";
import { FindFilialByNameUseCase } from "src/application/use-cases/Filial/find-Filial-by-name.use-case";

@Module({
    imports: [PrismaModule],
    exports: [FilialService],
    controllers: [FilialController],

    providers: [
        FilialService,

        CreateFilialUseCase,
        UpdateFilialUseCase,
        DeleteFilialUseCase,
        FindAllFilial,
        FindFilialByIdUseCase,
        FindFilialByNameUseCase,

        {
            provide: 'FilialRepository',
            useClass: PrismaFilialRepository
        },
    ],

}) export class FilialModule { }
