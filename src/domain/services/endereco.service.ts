import { Inject, Injectable } from '@nestjs/common';

import { Endereco } from 'src/domain/entities/endereco.entity';
import { EnderecoRepository } from 'src/domain/repositories/endereco.repository';

import { LogradouroService } from 'src/domain/services/logradouro.service';
import { BairroService } from 'src/domain/services/bairro.service';
import { CidadeService } from 'src/domain/services/cidade.service';
import { EstadoService } from 'src/domain/services/estado.service';

@Injectable()
export class EnderecoService {
  constructor(
    @Inject()
    private readonly enderecoRepository: EnderecoRepository,

    private readonly logradouroService: LogradouroService,
    private readonly bairroService: BairroService,
    private readonly cidadeService: CidadeService,
    private readonly estadoService: EstadoService,
  ) {}

    async createEndereco(
        cep: string,
        numero: string,
        logradouroNome: string,
        bairroNome: string,
        cidadeNome: string,
        estadoUf: string,

    ):  
    Promise<Endereco> {
        const logradouro = await this.logradouroService.validateOrCreateLogradouro(logradouroNome);
        const bairro = await this.bairroService.validateOrCreateBairro(bairroNome);
        const cidade = await this.cidadeService.validateOrCreateCidade(cidadeNome);
        const estado = await this.estadoService.validateOrCreateEstado(estadoUf);

        return this.enderecoRepository.create({
            cep,
            numero,
            logradouroId: logradouro.id,
            bairroId: bairro.id,
            cidadeId: cidade.id,
            estadoId: estado.id,
        });
    }

    async updateEndereco(
        id: number,
        cep: string,
        numero: string,
        logradouroNome: string,
        bairroNome: string,
        cidadeNome: string,
        estadoUf: string,
    ): 
    Promise<Endereco> {
        const logradouro = await this.logradouroService.validateOrCreateLogradouro(logradouroNome);
        const bairro = await this.bairroService.validateOrCreateBairro(bairroNome);
        const cidade = await this.cidadeService.validateOrCreateCidade(cidadeNome);
        const estado = await this.estadoService.validateOrCreateEstado(estadoUf);

        return this.enderecoRepository.update(id, {
            cep,
            numero,
            logradouroId: logradouro.id,
            bairroId: bairro.id,
            cidadeId: cidade.id,
            estadoId: estado.id,
        });
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