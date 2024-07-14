import { Injectable } from "@nestjs/common";
import { Estado } from "src/domain/entities/estado.entity";
import { EstadoService } from "src/domain/services/estado.service";

@Injectable()
export class UpdateEstadoUseCase {
    constructor(private readonly estadoService: EstadoService) { }

    async execute(id: number, nome: string): Promise<Estado> {
        return this.estadoService.updateEstado(+id, nome);
    }
}
