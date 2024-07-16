import { Module } from "@nestjs/common";
import { PrismaModule } from "../prisma/prisma.module";

import { JuridicaService } from "src/domain/services/Juridica.service";
import { JuridicaController } from "src/interface/controllers/Juridica.controller";
import { PrismaJuridicaRepository } from "../repositories/prisma/prisma-Juridica.repository";

import { CreateJuridicaUseCase } from "src/application/use-cases/Juridica/create-Juridica.use-case";
import { UpdateJuridicaUseCase } from "src/application/use-cases/Juridica/update-Juridica.use-case";
import { DeleteJuridicaUseCase } from "src/application/use-cases/Juridica/delete-Juridica.use-case";
import { FindAllJuridica } from "src/application/use-cases/Juridica/find-all-Juridica.use-case";
import { FindJuridicaByIdUseCase } from "src/application/use-cases/Juridica/find-Juridica-by-id.use-case";
import { FindJuridicaByNameUseCase } from "src/application/use-cases/Juridica/find-Juridica-by-name.use-case";

@Module({
    imports: [PrismaModule],
    exports: [JuridicaService],
    controllers: [JuridicaController],

    providers: [
        JuridicaService,

        CreateJuridicaUseCase,
        UpdateJuridicaUseCase,
        DeleteJuridicaUseCase,
        FindAllJuridica,
        FindJuridicaByIdUseCase,
        FindJuridicaByNameUseCase,

        {
            provide: 'JuridicaRepository',
            useClass: PrismaJuridicaRepository
        },
    ],

}) export class JuridicaModule { }
