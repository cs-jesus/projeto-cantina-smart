import { Module } from "@nestjs/common";
import { PrismaModule } from "../prisma/prisma.module";

import { CidadeService } from "src/domain/services/cidade.service";
import { CidadeController } from "src/interface/controllers/cidade.controller";
import { PrismaCidadeRepository } from "../repositories/prisma/prisma-cidade.repository";

@Module({
    imports: [PrismaModule],
    exports: [CidadeService],
    controllers: [CidadeController],

    providers: [
        CidadeService,



        {
            provide: 'BCidadeRepository',
            useClass: PrismaCidadeRepository
        },
    ],

}) export class CidadeModule { }
