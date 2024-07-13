import { Module } from "@nestjs/common";
import { PrismaModule } from "../prisma/prisma.module";

import { TipoInstituicaoService } from "src/domain/services/tipo-instituicao.service";
import { TipoInstituicaoController } from "src/interface/controllers/tipo-instituicao.controller";
import { PrismaTipoInstituicaoRepository } from "../repositories/prisma/prisma-tipo-instituicao.repository";

import { CreateTipoInstituicaoUseCase } from "src/application/use-cases/tipo-instituicao/create-tipo-instituicao.use-case";
import { DeleteTipoInstituicaoUseCase } from "src/application/use-cases/tipo-instituicao/delete-tipo-instituicao.use-case";
import { UpdateTipoInstituicaoUseCase } from "src/application/use-cases/tipo-instituicao/update-tipo-instituicao.use-case";
import { FindAllTipoInstituicoesUseCase } from "src/application/use-cases/tipo-instituicao/find-all-tipo-instituicoes.use-case";
import { FindTipoInstituicaoByIdUseCase } from "src/application/use-cases/tipo-instituicao/find-tipo-instituicao-by-id.use-case";
import { FindTipoInstituicaoByDescricaoUseCase } from "src/application/use-cases/tipo-instituicao/find-tipo-instituicao-by-descricao-use-case";

@Module({
    imports: [PrismaModule],
    exports: [TipoInstituicaoService],
    controllers: [TipoInstituicaoController],

    providers: [
        TipoInstituicaoService,

        CreateTipoInstituicaoUseCase,
        UpdateTipoInstituicaoUseCase,
        DeleteTipoInstituicaoUseCase,
        FindAllTipoInstituicoesUseCase,
        FindTipoInstituicaoByIdUseCase,
        FindTipoInstituicaoByDescricaoUseCase,

        {
            provide: 'TipoInstituicaoRepository',
            useClass: PrismaTipoInstituicaoRepository
        },
    ],
}) export class TipoInstituicaoModule { }
