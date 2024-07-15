import { Injectable } from "@nestjs/common";
import { UnidadeMedida } from "src/domain/entities/unidade-medida.entity";
import { UnidadeMedidaService } from "src/domain/service/unidade-medida.service";

@Injectable()
export class CreateUnidadeMedidaUseCase {
    constructor(private readonly unidadeMedidaService: UnidadeMedidaService) {}

    async execute(nome: string, sigla: string): Promise<UnidadeMedida> {
        return this.unidadeMedidaService.createUnidadeMedida(nome,sigla);
    }
}