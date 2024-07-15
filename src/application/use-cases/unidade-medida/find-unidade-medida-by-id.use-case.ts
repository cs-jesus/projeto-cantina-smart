import { Injectable } from "@nestjs/common";
import { UnidadeMedida } from "src/domain/entities/unidade-medida.entity";
import { UnidadeMedidaService } from "src/domain/service/unidade-medida.service";


@Injectable()
export class FindUnidadeMedidaByIdUseCase {
    constructor(private readonly unidadeMedidaService: UnidadeMedidaService) { }

    async execute(id: number): Promise<UnidadeMedida | null> {
        return this.unidadeMedidaService.findUnidadeMedidaById(id);
    }
}