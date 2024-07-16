import { Module } from "@nestjs/common";
import { PrismaModule } from "../prisma/prisma.module";



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
