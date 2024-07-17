import { Injectable } from '@nestjs/common';

import { EnderecoService } from 'src/domain/services/endereco.service';

@Injectable()
export class DeleteEnderecoUseCase {
    constructor(private readonly enderecoService: EnderecoService) { }

    async execute(id: number): Promise<void> {
        return this.enderecoService.deleteEndereco(id);
    }
}
