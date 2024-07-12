import { Module } from "@nestjs/common";
import { PrismaModule } from "../prisma/prisma.module";

import { EstadoService } from "src/domain/service/estado.service";
import { EstadoController } from "src/interface/controllers/estado.controller";
import { PrismaEstadoRepository } from "../repositories/prisma/prisma-estado.repository";

@Module({
    imports: [PrismaModule],
    exports: [EstadoService],
    controllers: [EstadoController],

    providers: [
        EstadoService,

        

        {
            provide: 'EstadoRepository',
            useClass: PrismaEstadoRepository
        },
    ],

}) export class EstadoModule { }
