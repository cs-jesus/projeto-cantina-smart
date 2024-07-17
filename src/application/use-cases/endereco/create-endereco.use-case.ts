import { Injectable } from '@nestjs/common';

import { Endereco } from 'src/domain/entities/endereco.entity';
import { EnderecoService } from 'src/domain/services/endereco.service';

@Injectable()
export class CreateEnderecoUseCase {
    constructor(private readonly enderecoService: EnderecoService) { }

    async execute(
        logradouroNome: string,
        bairroNome: string,
        cidadeNome: string,
        estadoUf: string,
        cep: string,
        numero: string,
    ): Promise<Endereco> {
        return this.enderecoService.validateOrCreateEndereco(
            logradouroNome, bairroNome, cidadeNome, estadoUf, cep, numero,
        );
    }
}
