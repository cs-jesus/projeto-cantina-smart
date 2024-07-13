import { Module } from "@nestjs/common";
import { PrismaModule } from "../prisma/prisma.module";

import { BairroService } from "src/domain/services/bairro.service";
import { BairroController } from "src/interface/controllers/bairro.controller";
import { PrismaBairroRepository } from "../repositories/prisma/prisma-bairro.repository";

@Module({
    imports: [PrismaModule],
    exports: [BairroService],
    controllers: [BairroController],

    providers: [
        BairroService,



        {
            provide: 'BairroRepository',
            useClass: PrismaBairroRepository
        },
    ],

}) export class BairroModule { }
