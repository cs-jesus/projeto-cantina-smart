import { Injectable } from "@nestjs/common";
import { UnidadeMedida } from "src/domain/entities/unidade-medida.entity";
import { UnidadeMedidaService } from "src/domain/service/unidade-medida.service";


@Injectable()
export class FindAllUnidadeMedida {
    constructor(private readonly unidadeMedidaService: UnidadeMedidaService) { }

    async execute(): Promise<UnidadeMedida[]> {
        return this.unidadeMedidaService.findAllUnidadeMedida();
    }
}