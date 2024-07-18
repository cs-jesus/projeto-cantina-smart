import { Module } from "@nestjs/common";
import { PrismaModule } from "../prisma/prisma.module";

import { BairroService } from "src/domain/services/bairro.service";
import { BairroController } from "src/interface/controllers/bairro.controller";
import { PrismaBairroRepository } from "../repositories/prisma/prisma-bairro.repository";

import { CreateBairroUseCase } from "src/application/use-cases/bairro/create-bairro.use-case";
import { DeleteBairroUseCase } from "src/application/use-cases/bairro/delete-bairro.use-case";
import { FindAllBairros } from "src/application/use-cases/bairro/find-all-bairros.use-case";
import { FindBairroByIdUseCase } from "src/application/use-cases/bairro/find-bairro-by-id.use-case";
import { FindBairroByNameUseCase } from "src/application/use-cases/bairro/find-bairro-by-name.use-case";
import { UpdateBairroUseCase } from "src/application/use-cases/bairro/update-bairro.use-case";

@Module({
    imports: [PrismaModule],
    exports: [BairroService],
    controllers: [BairroController],

    providers: [
        BairroService,
        PrismaBairroRepository,

        CreateBairroUseCase,
        UpdateBairroUseCase,
        DeleteBairroUseCase,
        FindAllBairros,
        FindBairroByIdUseCase,
        FindBairroByNameUseCase,

        {
            provide: 'BairroRepository',
            useClass: PrismaBairroRepository
        },
    ],

}) export class BairroModule { }
