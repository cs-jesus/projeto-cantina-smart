import { Injectable } from "@nestjs/common";
import { UnidadeMedidaService } from "src/domain/service/unidade-medida.service";


@Injectable()
export class DeleteUnidadeMedidaUseCase {
    constructor(private readonly unidadeMedidaService: UnidadeMedidaService) { }

    async execute(id: number): Promise<void> {
        return this.unidadeMedidaService.deleteUnidadeMedida(id);
    }
}