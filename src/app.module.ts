import { Module } from '@nestjs/common';
import { CreateInstituicaoUseCase } from './application/use-cases/instituicao/create-instituicao.use-case';
import { DeleteInstituicaoUseCase } from './application/use-cases/instituicao/delete-instituicao.use-case';
import { GetInstituicaoByIdUseCase } from './application/use-cases/instituicao/get-instituicao-by-id.use-case';
import { GetInstituicoesUseCase } from './application/use-cases/instituicao/get-instituicoes.use-case';
import { UpdateInstituicaoUseCase } from './application/use-cases/instituicao/update-instituicao.use-case';
import { ValidateInstituicaoNameUseCase } from './application/use-cases/instituicao/validate-instituicao-name.use-case';
import { CreateTipoInstituicaoUseCase } from './application/use-cases/tipo-instituicao/create-tipo-instituicao.use-case';
import { DeleteTipoInstituicaoUseCase } from './application/use-cases/tipo-instituicao/delete-tipo-instituicao.use-case';
import { GetTipoInstituicaoByIdUseCase } from './application/use-cases/tipo-instituicao/get-tipo-instituicao-by-id.use-case';
import { GetTipoInstituicoesUseCase } from './application/use-cases/tipo-instituicao/get-tipo-instituicoes.use-case';
import { UpdateTipoInstituicaoUseCase } from './application/use-cases/tipo-instituicao/update-tipo-instituicao.use-case';
import { ValidateTipoInstituicaoNameUseCase } from './application/use-cases/tipo-instituicao/validate-tipo-instituicao-name.use-case';
import { InstituicaoService } from './domain/service/instituicao.service';
import { TipoInstituicaoService } from './domain/service/tipo-instituicao.service';

import { PrismaInstituicaoRepository } from './infraestructure/repositories/prisma/prisma-instituicao.repository';
import { PrismaTipoInstituicaoRepository } from './infraestructure/repositories/prisma/prisma-tipo-instituicao.repository';
import { InstituicaoController } from './interface/controllers/instituicao.controller';
import { TipoInstituicaoController } from './interface/controllers/tipo-instituicao.controller';

import { LogradouroModule } from './infraestructure/module/logradouro.module';
import { PrismaModule } from './infraestructure/prisma/prisma.module';



@Module({
  imports: [

    LogradouroModule,
    PrismaModule
    ],

  controllers: [InstituicaoController, TipoInstituicaoController],

  providers: [

    InstituicaoService,
    {
      provide: 'InstituicaoRepository',
      useClass: PrismaInstituicaoRepository,
    },
    CreateInstituicaoUseCase,
    GetInstituicoesUseCase,
    GetInstituicaoByIdUseCase,
    UpdateInstituicaoUseCase,
    DeleteInstituicaoUseCase,
    ValidateInstituicaoNameUseCase,
    TipoInstituicaoService,
    {
      provide: 'TipoInstituicaoRepository',
      useClass: PrismaTipoInstituicaoRepository,
    },
    CreateTipoInstituicaoUseCase,
    GetTipoInstituicoesUseCase,
    GetTipoInstituicaoByIdUseCase,
    UpdateTipoInstituicaoUseCase,
    DeleteTipoInstituicaoUseCase,
    ValidateTipoInstituicaoNameUseCase,
  ],
})
export class AppModule {}