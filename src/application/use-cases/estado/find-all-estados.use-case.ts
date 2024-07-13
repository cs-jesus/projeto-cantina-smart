import { Injectable } from "@nestjs/common";
import { Estado } from "src/domain/entities/estado.entity";
import { EstadoService } from "src/domain/services/estado.service";

@Injectable()
export class FindAllEstados {
    constructor(private readonly estadoService: EstadoService) { }

    async execute(): Promise<Estado[]> {
        return this.estadoService.findAllEstados();
    }
}
