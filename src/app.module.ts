import { Module } from '@nestjs/common';
import { PrismaModule } from './infraestructure/prisma/prisma.module';

import { TipoInstituicaoModule } from './infraestructure/module/tipo-instituicao.modulo';
import { LogradouroModule } from './infraestructure/module/logradouro.module';

@Module({
    imports: [
        PrismaModule,

        TipoInstituicaoModule,

        LogradouroModule,
    ],

    controllers: [],
    providers: [],
})
export class AppModule {}