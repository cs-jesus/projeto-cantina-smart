import { Injectable } from '@nestjs/common';
import { EstadoService } from 'src/domain/services/estado.service';

@Injectable()
export class DeleteEstadoUseCase {
    constructor(private readonly estadoService: EstadoService) { }

    async execute(id: number): Promise<void> {
        return this.estadoService.deleteEstado(+id);
    }
}
