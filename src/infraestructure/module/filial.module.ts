import { Module } from "@nestjs/common";
import { PrismaModule } from "../prisma/prisma.module";

import { FilialService } from "src/domain/services/filial.service";


import { CreateFilialUseCase } from "src/application/use-cases/filial/create-filial.use-case";
import { DeleteFilialUseCase } from "src/application/use-cases/filial/delete-filial.use-case";
import { UpdateFilialUseCase } from "src/application/use-cases/filial/update-filial.use-case";
import { FindAllFilial } from "src/application/use-cases/filial/find-all-filiais.use-case";
import { FindFilialByIdUseCase } from "src/application/use-cases/filial/find-filial-by-id.use-case";



@Module({
    imports: [PrismaModule],
    exports: [FilialService],
    controllers: [],

    providers: [
        FilialService,

        CreateFilialUseCase,
        UpdateFilialUseCase,
        DeleteFilialUseCase,
        FindAllFilial,
        FindFilialByIdUseCase,
        ,

        {
            provide: 'FilialRepository',
            useClass: PrismaFilialRepository
        },
    ],

}) export class FilialModule { }
