import { Module } from "@nestjs/common";
import { PrismaModule } from "../prisma/prisma.module";

import { EnderecoService } from "src/domain/services/endereco.service";
import { EnderecoController } from "src/interface/controllers/endereco.controller";
import { PrismaEnderecoRepository } from "../repositories/prisma/prisma-endereco.repository";

import { CreateEnderecoUseCase } from "src/application/use-cases/endereco/create-endereco.use-case";
import { DeleteEnderecoUseCase } from "src/application/use-cases/endereco/delete-endereco.use-case";
import { UpdateEnderecoUseCase } from "src/application/use-cases/endereco/update-endereco.use-case";
import { FindAllEnderecosUseCase } from "src/application/use-cases/endereco/find-all-enderecos.use-case";
import { FindEnderecoByIdUseCase } from "src/application/use-cases/endereco/find-endereco-by-id.use-case";

import { BairroService } from "src/domain/services/bairro.service";
import { CidadeService } from "src/domain/services/cidade.service";
import { EstadoService } from "src/domain/services/estado.service";
import { LogradouroService } from "src/domain/services/logradouro.service";

@Module({
    imports: [PrismaModule],
    exports: [EnderecoService],
    controllers: [EnderecoController],

    providers: [
        EnderecoService,

        LogradouroService,
        BairroService,
        CidadeService,
        EstadoService,

        CreateEnderecoUseCase,
        UpdateEnderecoUseCase,
        DeleteEnderecoUseCase,
        FindAllEnderecosUseCase,
        FindEnderecoByIdUseCase,
        

        {
            provide: 'EnderecoRepository',
            useClass: PrismaEnderecoRepository
        },
    ],

}) export class EnderecoModule { }
