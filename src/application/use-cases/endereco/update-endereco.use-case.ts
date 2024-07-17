import { Injectable } from '@nestjs/common';

import { Endereco } from 'src/domain/entities/endereco.entity';
import { EnderecoService } from 'src/domain/services/endereco.service';

@Injectable()
export class UpdateEnderecoUseCase {
  constructor(private readonly enderecoService: EnderecoService) { }

  async execute(
    id: number,
    logradouroNome: string,
    bairroNome: string,
    cidadeNome: string,
    estadoUf: string,
    cep: string,
    numero: string,
  ): Promise<Endereco> {
    return this.enderecoService.updateEndereco(
      id, logradouroNome, bairroNome, cidadeNome, estadoUf, cep, numero,
    );
  }
}
