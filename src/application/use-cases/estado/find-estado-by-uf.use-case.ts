import { Injectable } from '@nestjs/common';
import { Estado } from 'src/domain/entities/estado.entity';
import { EstadoService } from 'src/domain/services/estado.service';

@Injectable()
export class FindEstadoByUfUseCase {
    constructor(private readonly estadoService: EstadoService) { }

    async execute(uf: string): Promise<Estado | null> {
        return this.estadoService.findEstadoByUf(uf);
    }
}
