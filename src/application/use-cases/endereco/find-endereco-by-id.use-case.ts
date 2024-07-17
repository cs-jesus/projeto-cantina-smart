import { Injectable } from '@nestjs/common';

import { Endereco } from 'src/domain/entities/endereco.entity';
import { EnderecoService } from 'src/domain/services/endereco.service';

@Injectable()
export class FindEnderecoByIdUseCase {
    constructor(private readonly enderecoService: EnderecoService) { }

    async execute(id: number): Promise<Endereco | null> {
        return this.enderecoService.findById(id);
    }
}
