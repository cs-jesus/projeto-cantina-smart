import { Injectable } from "@nestjs/common";
import { Estado } from "src/domain/entities/estado.entity";
import { EstadoService } from "src/domain/services/estado.service";

@Injectable()
export class FindEstadoByIdUseCase {
    constructor(private readonly estadoService: EstadoService) { }

    async execute(id: number): Promise<Estado | null> {
        return this.estadoService.findEstadoById(+id);
    }
}
