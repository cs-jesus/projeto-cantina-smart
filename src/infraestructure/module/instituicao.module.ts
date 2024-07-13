import { Module } from "@nestjs/common";
import { PrismaModule } from "../prisma/prisma.module";

import { InstituicaoService } from "src/domain/services/instituicao.service";
import { InstituicaoController } from "src/interface/controllers/instituicao.controller";
import { PrismaInstituicaoRepository } from "../repositories/prisma/prisma-instituicao.repository";

@Module({
    imports: [PrismaModule],
    exports: [InstituicaoService],
    controllers: [InstituicaoController],

    providers: [
        InstituicaoService,



        {
            provide: 'InstituicaoRepository',
            useClass: PrismaInstituicaoRepository
        },
    ],

}) export class InstituicaoModule { }
