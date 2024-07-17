import { Injectable, Inject } from '@nestjs/common';

import { Endereco } from 'src/domain/entities/endereco.entity';
import { EnderecoRepository } from 'src/domain/repositories/endereco.repository';

import { LogradouroService } from 'src/domain/services/logradouro.service';
import { BairroService } from 'src/domain/services/bairro.service';
import { CidadeService } from 'src/domain/services/cidade.service';
import { EstadoService } from 'src/domain/services/estado.service';

@Injectable()
export class EnderecoService {
    constructor(
        @Inject('EnderecoRepository')
        private readonly enderecoRepository: EnderecoRepository,

        private readonly logradouroService: LogradouroService,
        private readonly bairroService: BairroService,
        private readonly cidadeService: CidadeService,
        private readonly estadoService: EstadoService,
    ) { }

    async validateOrCreateEndereco(
        logradouroNome: string,
        bairroNome: string,
        cidadeNome: string,
        estadoUf: string,
        cep: string,
        numero: string,

    ):
        Promise<Endereco> {
        let checkEndereco = await this.enderecoRepository.findByCepAndNumero(cep, numero);

        if (checkEndereco) {
            return checkEndereco;
        } else {

            const logradouroId = await this.logradouroService.validateOrCreateLogradouro(logradouroNome);
            const bairroId = await this.bairroService.validateOrCreateBairro(bairroNome);
            const cidadeId = await this.cidadeService.validateOrCreateCidade(cidadeNome);
            const estadoId = await this.estadoService.validateOrCreateEstado(estadoUf);

            const endereco = new Endereco(
                logradouroId, bairroId, cidadeId, estadoId,
                cep, numero,

            );

            return this.enderecoRepository.create(endereco);
        }
    }

    async updateEndereco(
        id: number,
        logradouroNome: string,
        bairroNome: string,
        cidadeNome: string,
        estadoUf: string,
        cep: string,
        numero: string,

    ):
        Promise<Endereco> {
        const logradouroId = await this.logradouroService.validateOrCreateLogradouro(logradouroNome);
        const bairroId = await this.bairroService.validateOrCreateBairro(bairroNome);
        const cidadeId = await this.cidadeService.validateOrCreateCidade(cidadeNome);
        const estadoId = await this.estadoService.validateOrCreateEstado(estadoUf);

        const endereco = new Endereco(
            logradouroId, bairroId, cidadeId, estadoId,
            cep, numero,

        );

        return this.enderecoRepository.update(id, endereco);
    }

    async deleteEndereco(id: number): Promise<void> {
        return this.enderecoRepository.delete(id);

    }

    async findAll(): Promise<Endereco[]> {
        return this.enderecoRepository.findAll();

    }

    async findById(id: number): Promise<Endereco | null> {
        return this.enderecoRepository.findById(id);

    }
}
