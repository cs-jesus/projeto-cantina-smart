import { Injectable } from '@nestjs/common';

import { Endereco } from 'src/domain/entities/endereco.entity';
import { EnderecoService } from 'src/domain/services/endereco.service';

@Injectable()
export class FindAllEnderecosUseCase {
    constructor(private readonly enderecoService: EnderecoService) { }

    async execute(): Promise<Endereco[]> {
        return this.enderecoService.findAll();
    }
}
