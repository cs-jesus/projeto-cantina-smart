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
    @Inject('EnderecoRepository')
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
        const logradouroNovo = await this.logradouroService.validateOrCreateLogradouro(logradouroNome);
        const bairroNovo = await this.bairroService.validateOrCreateBairro(bairroNome);
        const cidadeNovo = await this.cidadeService.validateOrCreateCidade(cidadeNome);
        const estadoNovo = await this.estadoService.validateOrCreateEstado(estadoUf);

        const endereco = new Endereco(
          logradouroNovo,
          bairroNovo,
          cidadeNovo,
          estadoNovo,
          cep,
          numero,
        )
        return this.enderecoRepository.create({endereco});
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
        const logradouroAtualizado = await this.logradouroService.validateOrCreateLogradouro(logradouroNome);
        const bairroAtualizado = await this.bairroService.validateOrCreateBairro(bairroNome);
        const cidadeAtualizado = await this.cidadeService.validateOrCreateCidade(cidadeNome);
        const estadoAtualizado = await this.estadoService.validateOrCreateEstado(estadoUf);

        return this.enderecoRepository.update(id, {
            cep,
            numero,
            logradouroId: logradouroAtualizado.id,
            bairroId: bairroAtualizado.id,
            cidadeId: cidadeAtualizado.id,
            estadoId: estadoAtualizado.id,
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