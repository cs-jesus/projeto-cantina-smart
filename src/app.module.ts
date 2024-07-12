import { Module } from '@nestjs/common';
import { PrismaModule } from './infraestructure/prisma/prisma.module';

import { TipoInstituicaoModule } from './infraestructure/module/tipo-instituicao.modulo';
import { InstituicaoModule } from './infraestructure/module/instituicao.modulo';

import { LogradouroModule } from './infraestructure/module/logradouro.module';
import { BairroModule } from './infraestructure/module/bairro.module';
import { CidadeModule } from './infraestructure/module/cidade.module';
import { EstadoModule } from './infraestructure/module/estado.module';

@Module({
    imports: [
        PrismaModule,

        TipoInstituicaoModule, InstituicaoModule, 

        LogradouroModule, BairroModule, CidadeModule, EstadoModule,
    ],

    controllers: [],
    providers: [],
})
export class AppModule {}
