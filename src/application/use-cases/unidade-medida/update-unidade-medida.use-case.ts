import { Injectable } from "@nestjs/common";
import { UnidadeMedida } from "src/domain/entities/unidade-medida.entity";
import { UnidadeMedidaService } from "src/domain/service/unidade-medida.service";


@Injectable()
export class UpdateUnidadeMedidaUseCase {
    constructor(private readonly unidadeMedidaService: UnidadeMedidaService) { }

    async execute(id: number, nome: string, sigla:string): Promise<UnidadeMedida> {
        return this.unidadeMedidaService.updateUnidadeMedida(id, nome,sigla)
    }
}
