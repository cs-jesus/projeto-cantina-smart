import { Injectable } from '@nestjs/common';
import { EnderecoService } from 'src/domain/services/endereco.service';
import { Endereco } from 'src/domain/entities/endereco.entity';

@Injectable()
export class UpdateEnderecoUseCase {
  constructor(private readonly enderecoService: EnderecoService) {}

  async execute(
    id: number,
    cep: string,
    numero: string,
    logradouroNome: string,
    bairroNome: string,
    cidadeNome: string,
    estadoUf: string,
  ): Promise<Endereco> {
    return this.enderecoService.updateEndereco(
      id,
      cep,
      numero,
      logradouroNome,
      bairroNome,
      cidadeNome,
      estadoUf,
    );
  }
}
