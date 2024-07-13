import { Module } from "@nestjs/common";
import { PrismaModule } from "../prisma/prisma.module";

import { EstadoService } from "src/domain/services/estado.service";
import { EstadoController } from "src/interface/controllers/estado.controller";
import { PrismaEstadoRepository } from "../repositories/prisma/prisma-estado.repository";

import { CreateEstadoUseCase } from "src/application/use-cases/estado/create-estado.use-case";
import { DeleteEstadoUseCase } from "src/application/use-cases/estado/delete-estado.use-case";
import { FindAllEstados } from "src/application/use-cases/estado/find-all-estados.use-case";
import { FindEstadoByIdUseCase } from "src/application/use-cases/estado/find-estado-by-id.use-case";
import { UpdateEstadoUseCase } from "src/application/use-cases/estado/update-estado.use-case";
import { FindEstadoByUfUseCase } from "src/application/use-cases/estado/find-estado-by-uf.use-case";

@Module({
    imports: [PrismaModule],
    exports: [EstadoService],
    controllers: [EstadoController],

    providers: [
        EstadoService,

        CreateEstadoUseCase,
        UpdateEstadoUseCase,
        DeleteEstadoUseCase,
        FindAllEstados,
        FindEstadoByIdUseCase,
        FindEstadoByUfUseCase,

        {
            provide: 'EstadoRepository',
            useClass: PrismaEstadoRepository
        },
    ],

}) export class EstadoModule { }
